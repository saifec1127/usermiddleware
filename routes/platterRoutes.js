const express = require("express");
const {getPlatters, CreatePlatters} = require("../controllers/platterController");
//const router = require("./userRoutes");

const platterRouter = express.Router();

platterRouter.route('/').get(getPlatters).post(CreatePlatters);

module.exports = platterRouter;
