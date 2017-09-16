'use strict';


var mongoose = require('mongoose'),
Colors = mongoose.model('Colors');

exports.list_all_colors = function (req, res) {
    Colors.find({}, function (err, colors) {
        if (err)
            res.send(err);
        res.json(colors);
    });
};
