const mongoose = require("mongoose")
const Item = require("./itemModel")

const newCollectionSchema = new mongoose.Schema({
    type: {
        type: String
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    date: {
        type: String
    },
    artwork: {
        type: String
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    }]
})

module.exports = mongoose.model("NewCollection", newCollectionSchema)