const axois = require("axios");

async function callServer() {
  axois.get("https://my-he.onrender.com").then((res) => {});
}

setInterval(callServer, 100000);
