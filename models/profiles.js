const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favs: {
    type: [],
    required: true,
  },
});

module.exports = mongoose.model("profile", profileSchema);
