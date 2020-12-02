import jwt from 'jsonwebtoken';
import { decodeToken } from '../handlers/tokenHandler.js';
import db from '../database/connection.js';

const { JsonWebTokenError } = jwt;

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('You\'re not authorized');

    const [type, token] = req.headers.authorization.split(' ');

    if (token === 'undefined' || token === undefined) throw new Error('Please provide a token');
    if (type !== 'Bearer') throw new Error('Wrong authentication type');

    const data = await decodeToken(token);

    if (data instanceof JsonWebTokenError) throw new Error('There was a problem with the provided token');

    const { _id: id } = data;
    const user = await db.User.findById(id);

    if (!user) throw new Error('You\'re not authorized');
    return next();
  } catch (err) {
    return next(err);
  }
};

export default authMiddleware;
