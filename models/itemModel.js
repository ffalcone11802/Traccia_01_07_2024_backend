const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
  title: {
    type: String
  },
  length: {
    type: Number
  }
})

module.exports = mongoose.model("Item", itemSchema)