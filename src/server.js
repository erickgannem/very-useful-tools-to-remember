import App from './app.js';

const PORT = process.env.PORT || 3000;
const { server } = new App();

server.listen(
  PORT,
  process.stdout.write(`Server running on port: ${PORT} \n`)
)