const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ ok: true });
});

module.exports = routes;