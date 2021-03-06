const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const Color = require('./api/models/colorsModel');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb://username1:password123@ds139954.mlab.com:39954/colors-db-hh', { useMongoClient: true }, (err, db) => {
    if (err) return console.log(err);
    app.listen(port, () => {
        console.log('running on: ' + port);
    });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

let routes = require('./api/routes/colorsRoutes');
routes(app);