import { Router } from 'express';

import ToolController from './controllers/ToolController.js';
import UserController from './controllers/UserController.js';
import authMiddleware from './middlewares/authMiddleware.js';

const routes = Router();

routes.get('/tools', ToolController.index, ToolController.indexByTag);
routes.post('/tools', authMiddleware, ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

routes.post('/users/signin', UserController.signIn);
routes.post('/users/signup', UserController.signUp);

export default routes;
