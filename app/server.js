const configDB = require('../config/database.js');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Color = require('./api/models/colorsModel'), 
    bodyParser = require('body-parser');

// mongoose.Promise = global.Promise;
mongoose.connect(configDB.url, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var routes = require('./api/routes/colorsRoutes');
routes(app);

app.listen(port);


console.log('running on: ' + port);
