'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let ColorSchema = new Schema({
    color: {
        type: String,
        required: 'Color value required'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Colors', ColorSchema);