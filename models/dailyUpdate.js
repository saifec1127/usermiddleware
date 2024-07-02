const mongoose = require('mongoose');

const dailyUpdateSchema = new mongoose.Schema({
    mood: {
        type: String,
        required: true
    },
    energyLevel: {
        type: String,
        required: true
    },
    physicalFeelings: {
        type: String,
        required: true
    },
    emotionalThoughts: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        required: true
    },
    highlightsOfTheDay: {
        type: String,
        required: true
    },
    concerns: {
        type: String,
        required: true
    },
    babysDevelopmentObservations: {
        type: String,
        required: true
    },
    additionalNotes: {
        type: String,
        required: true
    },
});

const DailyUpdate = mongoose.model('DailyUpdate', dailyUpdateSchema);

module.exports = DailyUpdate;
