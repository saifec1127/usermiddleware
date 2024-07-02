const express = require('express');
const { getDailyUpdates, createDailyUpdates } = require('../controllers/dailyUpdate');

const router = express.Router();

router.route('/')
    .get(getDailyUpdates)
    .post(createDailyUpdates);

module.exports = router;
