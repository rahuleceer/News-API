const express = require('express');
const controller = require('../controller/narticle.controller');

const Route = express.Router();

Route.route('/').post(controller.article);

module.exports = Route;
