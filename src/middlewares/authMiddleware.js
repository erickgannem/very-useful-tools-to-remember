const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) throw new Error('You\'re not authorized');

  const [type, token] = req.headers.authorization.split(' ');

  if (type !== 'Bearer') throw new Error('Wrong authentication type');
  if (token === 'undefined') throw new Error('Please provide a token');

  next();
};

export default authMiddleware;
