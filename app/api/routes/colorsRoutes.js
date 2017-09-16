'use strict';
module.exports = function (app) {
    var colors = require('../controllers/colorsController');

    app.route('/colors')
        .get(colors.list_all_colors);
};