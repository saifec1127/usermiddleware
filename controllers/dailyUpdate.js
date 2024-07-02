const DailyUpdate = require('../models/dailyUpdate');

// @desc    Get all DailyUpdates
// @route   GET /api/dailyUpdates
// @access  Public
const getDailyUpdates = async (req, res) => {
    try {
        const dailyUpdates = await DailyUpdate.find();
        res.json(dailyUpdates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a DailyUpdate
// @route   POST /api/dailyUpdates
// @access  Public
const createDailyUpdates = async (req, res) => {
    const {
        mood,
        energyLevel,
        physicalFeelings,
        emotionalThoughts,
        activities,
        highlightsOfTheDay,
        concerns,
        babysDevelopmentObservations,
        additionalNotes
    } = req.body;

    try {
        const dailyUpdate = new DailyUpdate({
            mood,
            energyLevel,
            physicalFeelings,
            emotionalThoughts,
            activities,
            highlightsOfTheDay,
            concerns,
            babysDevelopmentObservations,
            additionalNotes
        });
        const createdDailyUpdate = await dailyUpdate.save();
        res.status(201).json(createdDailyUpdate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDailyUpdates,
    createDailyUpdates
};
