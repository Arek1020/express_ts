import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from './config';
import Logger from './library/Logger';

import indexRouter from './routes/index'

mongoose.connect(String(config.mongo.url))
  .then(() => Logger.info('succesfully connect to mongo'))
  .catch(() => Logger.error('error connect to mongo'))

interface User {
  id: number;
  name: string;
  email: string;
}

const app = express();
app.use(express.json());

app.use('/', indexRouter);

app.listen(config.server.port, () => {
  Logger.success('Server is listening on port ' + config.server.port);
});
