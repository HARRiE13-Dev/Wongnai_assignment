var app = require("express")();
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
  res.send("<h1>API-Gatewary Trips</h1>");
});


app.get("/api/trip", function (req, res) {
  res.status(200)
  res.json(trips.findAll());
});

app.get("/api/trip/:id", function (req, res) {
  res.status(200)
  var id = req.params.id;
  res.json(trips.findById(id));
});

app.get("/api/trip/keyword/:tag" , function (req, res) {
  res.status(200)
  res.json(trips.findByTag(req.params.tag));
});

app.listen(port, function () {
  console.log("Starting node.js on port " + port);
});
