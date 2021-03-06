import express from 'express';
import cors from 'cors';

import routes from './routes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

export default class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errorMiddleware);
  }
}
