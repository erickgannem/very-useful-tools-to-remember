const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) throw new Error('You\'re not authorized');
  next();
};

export default authMiddleware;
