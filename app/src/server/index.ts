import { createServer } from 'http';
import * as express from 'express';
const cors = require('cors');
const WebSocket = require('ws');
const { join } = require('path');

const port = 2525;

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.static(join(__dirname, '../../build')));

const server = createServer(app);

server.listen(port, (err: any) => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on http://localhost:${port}`);

  const wss = new WebSocket.Server({ server });
  wss.on('connection', (ws: any) => {
    console.log('received: %s', '');
    ws.on('message', (message: any) => {
      wss.clients.forEach(function each(client: any) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });
  });
});
