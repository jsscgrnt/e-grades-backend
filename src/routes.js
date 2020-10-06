const express = require('express');

const routes = new express.Router();

const AlunoController = require('./controllers/AlunoController');

routes.post('/usuario', AlunoController.Create);

module.exports = routes;