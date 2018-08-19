import Sockette from "sockette";

interface Connection {
  subscribe: (cb: any) => void;
  send: (payload: any) => void;
}

export function connect(): Promise<Connection> {
  return new Promise(resolve => {
    let callback;
    let ws;
    const subscriber = {
      subscribe: cb => {
        callback = cb;
      },
      send: payload => {
        ws.json(payload);
      }
    };

    ws = new Sockette("ws://localhost:2525", {
      timeout: 5e3,
      maxAttempts: 1,
      onopen: e => {
        resolve(subscriber);
      },
      onmessage: e => {
        callback(JSON.parse(e.data));
      },
      onreconnect: e => console.log("Reconnecting...", e),
      onmaximum: e => console.log("Stop Attempting!", e),
      onclose: e => console.log("Closed!", e),
      onerror: e => console.log("Error:", e)
    });
  });
}
