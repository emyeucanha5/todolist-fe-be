const express = require("express");
const app = express();
app.get("/", function(req, res) {
  res.send("hi");
});
let port = process.env.PORT || 5000;

app.listen(port, function() {
 console.log("Server started successfully");
});