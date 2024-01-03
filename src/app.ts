import { createServer, IncomingMessage, ServerResponse } from "http";

var port = process.env.port || 3005;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.end(
      "Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)"
    );
  }
);

server.listen(port);

console.log("Server running on Port:", port);

export default server;
