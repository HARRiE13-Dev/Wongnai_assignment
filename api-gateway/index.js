var app = require("express")();
var users = require("./users");
var trips = require("./db");

var bodyParser = require("body-parser");

var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send("<h1>Hello Node.js--2</h1>");
});

app.get("/user", function (req, res) {
  res.json(users.findAll());
});

app.get("/trip", function (req, res) {
  res.json(trips.findAll());
});

app.get("/trips/:id", function (req, res) {
  //   return Newsapp::where("News_Type","like","%".$News_Type."%")->get();
  var id = req.params.id;
  res.json(users.findById(id));
});

app.get("/user/:id", function (req, res) {
  //   return Newsapp::where("News_Type","like","%".$News_Type."%")->get();
  var id = req.params.id;
  res.json(users.findById(id));
});

// let search = "";
// app.get(`/${search}`, function (req, res) {
//   var id = req.params.id;
//   res.json(users.findById(id));
// });

app.post("/newuser", function (req, res) {
  var json = req.body;
  res.send("Add new " + json.name + " Completed!");
});

app.listen(port, function () {
  console.log("Starting node.js on port " + port);
});
