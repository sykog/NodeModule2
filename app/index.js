const express = require("express");
const fs = require("fs");
const path = require("path")
const app = express();
const portNum = 6500;

app.listen(portNum, () => {
  console.log("listening on port " + portNum);
});

app.get("/api", (request, response) => {
  fs.readFile(path.join(__dirname, "./movies.json"), (error, data) => {
    if (error) response.send("Error Occured: " + error);
    else response.json(JSON.parse(data));
  });
});