"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
var port = process.env.port || 3005;
const server = (0, http_1.createServer)((request, response) => {
    response.end("Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)");
});
server.listen(port);
console.log("Server running on Port:", port);
exports.default = server;
