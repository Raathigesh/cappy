const WebSocket = require("websocket").w3cwebsocket;
(global as any).WebSocket = WebSocket;
const Sockette = require("sockette");

export function connect(onMessage: (payload: any) => void) {
  return new Promise((resolve, reject) => {
    const ws = new Sockette("ws://localhost:2525", {
      timeout: 5e3,
      onopen: e => {
        resolve(ws);
      },
      onmessage: e => onMessage(JSON.parse(e.data)),
      onreconnect: e => console.log("Reconnecting...", e),
      onmaximum: e => console.log("Stop Attempting!", e),
      onclose: e => console.log("Closed!", e),
      onerror: e => console.log("Error:", e)
    });
  });
}
