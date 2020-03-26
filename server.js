var path = require('path');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/apiModels'), //created model loading here
  bodyParser = require('body-parser');
  uristring = 
    process.env.MONGODB_URI || // it started working on herokuapp after I put this line
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 
    'mongodb://localhost/Tododb';
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route


app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/frontend/html/index.html'));
});
app.listen(port);


console.log('xhrchat RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });