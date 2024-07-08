const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  dinosaurId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("favorite", favoriteSchema);
