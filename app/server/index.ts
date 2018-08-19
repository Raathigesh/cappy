import { createServer } from "http";
import { parse } from "url";
import * as next from "next";
const WebSocket = require("ws");
const path = require("path");

const port = parseInt(process.env.PORT, 10) || 2525;
const dev = process.env.NODE_ENV !== "production";
const dir = dev ? __dirname : path.join(__dirname, "../../");

const app = next({ dev, dir });
const handle = app.getRequestHandler();
console.log("This is server");
app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);

    const wss = new WebSocket.Server({ server });
    wss.on("connection", ws => {
      console.log("received: %s", "");
      ws.on("message", message => {
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      });
    });
  });
});
