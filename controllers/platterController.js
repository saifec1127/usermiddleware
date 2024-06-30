const Platter = require('../models/platterModel');


// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getPlatters = async (req, res, next) => {

    try {
        const platter = await Platter.find();
        res.json(platter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

// @desc    Create a user
// @route   POST /api/users
// @access  Public
const CreatePlatters = async (req, res, next) => {
    const {stater, mainCourse, dessert} = req.body;

    try {
        const platter = new Platter({stater, mainCourse, dessert});
        const createplatter = await platter.save();
        res.status(200).json(createplatter);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = {
    getPlatters,
    CreatePlatters
};