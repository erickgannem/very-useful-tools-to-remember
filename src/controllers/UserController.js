import db from '../database/connection.js';

class UserController {
  static async create(req, res, next) {
    try {
      const user = await db.User.create(req.body);
      return res.status(200).json({ user: user.username });
    } catch (err) {
      return next(err);
    }
  }
}

export default UserController;
