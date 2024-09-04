const mongoose = require("mongoose")
const Item = require("./itemModel")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    }]
})

module.exports = mongoose.model("User", userSchema)
