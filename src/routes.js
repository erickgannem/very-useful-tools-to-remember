import { Router } from 'express';

import ToolController from './controllers/ToolController.js';

const routes = Router();

routes.get('/', ToolController.index);

export default routes;
