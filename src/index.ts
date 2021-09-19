import express, { Response, Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

import routes from './routes/transaction.router';
import database from './database';

class App {
  server: Application;
  constructor() {
    database.init();
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(
      express.static(path.resolve(__dirname, '..', 'client', 'build'))
    );
  }
  routes() {
    this.server.get('/api', welcomeResponse);
    this.server.use('/api', routes);
  }
}

function welcomeResponse(_: any, response: Response) {
  response.send({
    message: `Welcome to my-finace-API. ${
      database.connectedToMongoDB
        ? 'Everything seens to be ready.'
        : 'DataBank is not available yet.'
    }`,
  });
}

const app = new App().server;

const PORT = parseInt(process.env.APP_PORT) || 8000;
const HOST_NAME = process.env.APP_HOST || 'localhost';

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at: ${HOST_NAME}:${PORT}`);
});
