const mongoose = require('mongoose');

class Database {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect('mongodb+srv://teste_re9it:mecontrata@cluster0-u604c.mongodb.net/teste_re9it?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = new Database();