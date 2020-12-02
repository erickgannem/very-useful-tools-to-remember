const authMiddleware = (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('You\'re not authorized');

    const [type, token] = req.headers.authorization.split(' ');

    if (token === 'undefined' || token === undefined) throw new Error('Please provide a token');
    if (type !== 'Bearer') throw new Error('Wrong authentication type');

    next();
  } catch (err) {
    return next(err);
  }
};

export default authMiddleware;
