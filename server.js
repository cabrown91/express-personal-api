// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/cabrown91/express-personal-api/blob/master/README.md",
    baseUrl: "https://stark-dawn-84023.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/shows", description: "Shows that I like"},
      {method: "POST", path: "/api/shows", description: "Create more shows"},
      {method: "PUT", path: "/api/shows/:id", description: "Update a show that is in the database"},
      {method: "DELETE", path: "/api/shows/:id", description: "Delete a show from the database"} // CHANGE ME
    ]
  });
});

app.get('/api/profile', function(req, res) {
  res.json({
      name: "Alicia Brown",
      githubLink: "https://github.com/cabrown91",
      githubProfileImage: "https://avatars3.githubusercontent.com/u/19937807?v=3&s=460",
      personalSiteLink: "https://cabrown91.github.io/",
      currentCity: "San Francisco, CA"
  });
});

app.get('/api/shows', function(req, res){
  db.Shows.find(function(err, shows){
  if(err) {
    return console.log("index error:" + err);
  }
  res.json(shows);
  });
});

app.post('/api/shows', function(req, res){
  var newShow = new db.Shows({
    name: req.body.name,
    network: req.body.network,
    description: req.body.description,
    image: req.body.image
  });

  newShow.save(function handleDBShowSaved(err, savedShow){
    res.json(savedShow);
  });

});

app.delete('/api/shows/:id', function(req, res){
console.log('shows delete', req.params);

var showId = req.params.id;

db.Shows.findOneAndRemove({_id: showId}, function(err, deletedShow){
  res.json(deletedShow);
  });
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
