const { Server } = require("socket.io");
const axois = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

async function callServer() {
  axois.get("https://my-he.onrender.com/api/v1/products").then((res) => {});
}

const server = app.listen(8000, () => {});

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

setInterval(callServer, 100000);
