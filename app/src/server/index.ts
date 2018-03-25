import * as express from 'express';
import { bootstrap } from '../portal/server';
import ExtensionManager from '../extensions';
import * as http from 'http';

const app = express();
const server = http.createServer(app);

server.listen(process.env.PORT || 3005, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log('🚀 started');
});

bootstrap(server).then(() => {
  const extensionsManager = new ExtensionManager();
  extensionsManager.boostrap();
});
