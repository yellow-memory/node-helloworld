var express = require("express");
var app = express();

var routes = require("./routes/routes.js")(app);

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
