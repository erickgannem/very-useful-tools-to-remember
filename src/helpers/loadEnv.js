const loadEnv = (dotenv) => (_, __, next) => {
  dotenv.config({});
  next();
};

export default loadEnv;
