const express = require("express");
const mongoose = require("mongoose");
const db = require("./config");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middleware();
    this.routes();

    this.express.listen(4001, () =>
      console.log("API ejecutando en el puerto 4001.")
    );
  }

  async database() {
    await mongoose.connect(db.uri, { useNewUrlParser: true });
  }
  middleware() {
    this.express.use(express.json());
  }
  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;