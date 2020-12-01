import db from '../database/connection.js';
import Tool from '../database/models/Tool.js';
import { signToken } from '../handlers/tokenHandler.js';

class UserController {
  static async signUp(req, res, next) {
    try {
      const user = await db.User.create(req.body);
      const token = await signToken(JSON.stringify(user));

      return res.status(200).json({ user: user.username, token });
    } catch (err) {
      return next(err);
    }
  }

  static async signIn(req, res, next) {}
}

export default UserController;
