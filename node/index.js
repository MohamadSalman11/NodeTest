const { Server } = require("socket.io");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const server = app.listen(8000);

app.get("/api/v1/products", (req, res) => {
  res.send("Hello and welcome");
});

const socket = new Server(server, {
  cors: {
    origin: "*",
  },
});

socket.on("connection", () => {
  console.log("user is connected");
});
