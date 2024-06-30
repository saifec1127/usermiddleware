const mongoose = require("mongoose");

const platterSchema = new mongoose.Schema({
    stater: {
        type: String,
        required: true,
    },
     mainCourse : {
        type: String,
        required: true,
    },
    dessert: {
        type: String,
        required: true,
    },
});

const Platter = mongoose.model('Platter', platterSchema);

module.exports = Platter;