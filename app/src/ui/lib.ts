const { default: Sockette } = require('sockette');

interface Connection {
  subscribe: (cb: any) => void;
  send: (payload: any) => void;
}

export function connect(): Promise<Connection> {
  return new Promise(resolve => {
    let callback: any;
    let ws: any;
    const subscriber = {
      subscribe: (cb: any) => {
        callback = cb;
      },
      send: (payload: any) => {
        ws.json(payload);
      }
    };

    ws = new Sockette('ws://localhost:2525', {
      timeout: 5e3,
      maxAttempts: 1,
      onopen: () => {
        resolve(subscriber);
      },
      onmessage: (e: any) => {
        callback(JSON.parse(e.data));
      }
    });
  });
}
