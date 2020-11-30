import { Router } from 'express';

import ToolController from './controllers/ToolController.js';

const routes = Router();

routes.get('/tools', ToolController.index, ToolController.indexByTag);
routes.post('/tools', ToolController.store);

export default routes;
