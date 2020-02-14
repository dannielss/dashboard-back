const { Router } = require('express');
const multer = require('multer');

const uploadConfig = require('./config/multer');

const ProductController = require('./controllers/ProductController');

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/product/:product_id', ProductController.index);
routes.post('/new', upload.single('image'), ProductController.store);
routes.get('/products', ProductController.show);

module.exports = routes;