const mongoose = require("mongoose");

const dinoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  sound: {
    type: String,
    required: true,
  },
  habitat: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  assents: {
    type: [],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("dinosaurio", dinoSchema);
