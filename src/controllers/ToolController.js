import db from '../database/connection.js';

class ToolController {
  static async index(req, res, next) {
    if (req.query.tag) {
      next();
      return 0;
    }
    try {
      const tools = await db.Tool.find({}, { __v: 0 });

      return res.status(200).json(tools);
    } catch (err) {
      return next(err);
    }
  }

  static async indexByTag(req, res, next) {
    const { tag } = req.query;
    try {
      const tools = await db.Tool.aggregate([{
        $match: { tags: tag },
      }]);
      const response = tools.map((item) => item);

      return res.status(200).json(response);
    } catch (err) {
      return next(err);
    }
  }

  static async store(req, res, next) {
    try {
      const tools = await db.Tool.find({});
      tools.forEach((item) => {
        if (item.title === req.body.title) {
          throw new Error(`Tool name: "${req.body.title}" already exists`);
        }
      });

      const tool = await db.Tool.create(req.body);
      return res.status(201).set('Content-Type', 'application/json').json(tool);
    } catch (err) {
      return next(err);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;

    try {
      const tool = await db.Tool.findByIdAndDelete(id);
      if (!tool) throw new Error('Tool doesn\'t exist');

      return res.status(204).json(tool);
    } catch (err) {
      return next(err);
    }
  }
}

export default ToolController;
