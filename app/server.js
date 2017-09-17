const configDB = require('../config/database.js');
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require('mongoose');
let Color = require('./api/models/colorsModel');
let bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
console.log(configDB.url);
mongoose.connect(configDB.url, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

let routes = require('./api/routes/colorsRoutes');
routes(app);

app.listen(port);


console.log('running on: ' + port);
