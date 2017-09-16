'use strict';
const path = require('path');

module.exports = function (app) {
    var colors = require('../controllers/colorsController');

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../../index.html'));
    });

    app.route('/colors')
        .get(colors.list_all_colors);
};