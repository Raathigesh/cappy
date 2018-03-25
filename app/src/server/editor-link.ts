const WS = require('ws');
const wss = new WS.Server({ port: 7777 });
let connection: any = null;

export function getConnection() {
  if (connection) {
    return connection;
  }
  connection = initializeConnection();
  return connection;
}

function initializeConnection() {
  return new Promise((resolve, reject) => {
    wss.on('connection', (ws: any) => {
      resolve(ws);
    });
  });
}
