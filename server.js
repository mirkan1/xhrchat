var path = require('path');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/apiModels'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route


app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/frontend/html/index.html'));
});
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });