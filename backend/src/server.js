import dotenv from "dotenv";
dotenv.config();

import "./config/db.js";

import http from "http";
import { Server } from "socket.io";

import app from "./app.js";
import socketHandler from "./socket/socket.js";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5177",
    ],
    methods: ["GET", "POST"],
  },
});

socketHandler(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});