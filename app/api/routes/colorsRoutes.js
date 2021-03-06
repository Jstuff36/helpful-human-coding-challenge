'use strict';
const path = require('path');

module.exports = function (app) {
    let colors = require('../controllers/colorsController');

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../../index.html'));
    });

    app.route('/api/colors')
        .get(colors.list_all_colors)
        .post(colors.add_a_color);
};