import * as express from 'express';
import * as http from 'http';
import router from './router/http-router';

const app = express();
app.use(express.json());
app.use('/', router);

const server = http.createServer(app);

export default server;