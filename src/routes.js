import { Router } from 'express';

import ToolController from './controllers/ToolController.js';

const routes = Router();

routes.get('/tools', ToolController.index, ToolController.indexByTag);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

export default routes;
