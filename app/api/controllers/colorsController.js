'use strict';

let mongoose = require('mongoose'),
Color = mongoose.model('Colors');

exports.list_all_colors = function (req, res) {
    Color.find({}, function (err, colors) {
        if (err)
            res.send(err);
        res.json(colors);
    });
};

exports.add_a_color = function (req, res) {
    const newColor = new Color(req.body);
    newColor.save(function (err, color) {
        if (err)
            res.send(err);
        res.json(color);
    });
};
