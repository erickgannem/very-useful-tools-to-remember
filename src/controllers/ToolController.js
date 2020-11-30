import db from '../database/connection.js';

class ToolController {
  static async index(req, res, next) {
    try {
      const tools = await db.Tool.find({});
      return res.status(200).json(tools);
    } catch (err) {
      return next(err);
    }
  }
}

export default ToolController;
