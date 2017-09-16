'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ColorSchema = new Schema({
    hex: {
        type: String,
        required: 'Hex value required'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Colors', ColorSchema);