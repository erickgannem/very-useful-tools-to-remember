import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Tool from './models/Tool.js';
import User from './models/User.js';

dotenv.config({});

const { DB_NAME, DB_USER, DB_PASS } = process.env;
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.tk8mt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const db = { Tool, User };

export default db;
