const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const fs = require("fs");
const server = express();
const port = 5000;

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ server: "up" });
});

server.get("/api/notes", (req, res) => {
  fs.readFile("db/db.json", (err, data) => {
    res.send(data);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
