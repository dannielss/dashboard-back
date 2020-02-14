const express = require('express');
const routes = require('./routes');
const path = require('path');
require('./config/database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;