import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import errorHandler from './handlers/errorHandler.js';

export default class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errorHandler) 
  }
}
