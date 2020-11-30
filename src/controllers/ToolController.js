import db from '../database/connection.js';

class ToolController {
  static async index(req, res, next) {
    if (req.query.tag) {
      next();
      return 0;
    }
    try {
      const tools = await db.Tool.find({});
      return res.status(200).json(tools);
    } catch (err) {
      return next(err);
    }
  }

  static async indexByTag(req, res) {
    const { tag } = req.query;

    const tool = await db.Tool.aggregate([{
      $match: { tags: tag },
    }]);
    res.status(200).json(tool);
  }

  static async store(req, res, next) {
    try {
      const tool = await db.Tool.create(req.body);
      return res.status(200).json(tool);
    } catch (err) {
      return next(err);
    }
  }
}

export default ToolController;
