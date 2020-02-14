const Product = require('../models/Product');

class ProductController {
  async index(req, res) {
    const { product_id } = req.params;

    const product = await Product.findById(product_id);

    return res.json(product);
  }

  async store(req, res) {
    const { image } = req.file;
    const { title, description, price } = req.body;

    const product = await Product.create({
      image,
      title,
      description,
      price,
    })

    return res.json(product)
  }

  async show(req, res) {
    const products = await Product.find();

    return res.json(products);
  }
}

module.exports = new ProductController;