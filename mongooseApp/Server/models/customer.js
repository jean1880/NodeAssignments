'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var fields = {
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Birthdate: {
        type: Date,
        default: Date.now
    },
    Age: {
        type: Number
    },
    Address: {
        type: String
    },
    PhoneNumber: {
        type: String
    }
};

var customerSchema = new Schema(fields);

module.exports = mongoose.model('Customer', customerSchema);