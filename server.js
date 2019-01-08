var express = require("express");
var path = require("path");
var app = express();
var apiRoutes = require("./routing/apiRoutes");
var htmlRoutes = require("./routing/htmlRoutes");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/friends", apiRoutes);
app.use("/", htmlRoutes);
app.use(express.static(path.join(__dirname, "/static")));

app.listen(PORT, function() {
   console.log("App listening on PORT" + PORT);
 });

