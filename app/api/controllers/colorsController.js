'use strict';

let mongoose = require('mongoose'),
Color = mongoose.model('Colors');

exports.list_all_colors = function (req, res) {
    console.log('hi');
    Color.find({}, function (err, colors) {
        console.log('in colors controller');
        if (err)
            res.send(err);
        res.json(colors);
    });
};

exports.add_a_color = function (req, res) {
    const newColor = new Color(req.body);
    console.log(newColor);
    newColor.save(function (err, color) {
        console.log(color);
        console.log(err);
        if (err)
            res.send(err);
        res.json(color);
    });
};
