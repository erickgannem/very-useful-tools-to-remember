import db from '../database/connection.js';
import { signToken } from '../handlers/tokenHandler.js';

class UserController {
  static async signUp(req, res, next) {
    try {
      const user = await db.User.create(req.body);
      const { _id, username, email } = user;
      const token = await signToken(user);

      return res.status(200).json({
        _id, username, email, token,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async signIn(req, res, next) {
    const { body } = req;
    try {
      const user = await db.User.findOne({ username: body.username });
      if (!user) throw new Error('User not found');

      const { _id, username, email } = user;

      const passwordsMatch = await db.User.comparePasswords(body.password, user.password);

      let token = '';
      if (passwordsMatch) {
        token = await signToken(user);
      } else {
        throw new Error('Password is incorrect');
      }

      return res.status(200).json({
        _id, username, email, token,
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default UserController;
