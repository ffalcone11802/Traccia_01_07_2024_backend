const mongoose = require("mongoose")

const recommendationSchema = new mongoose.Schema({
    title: {
        type: String
    },
    collections: [{
        title:  String,
        subtitle:  String,
        artwork: String
    }]
})

module.exports = mongoose.model("Recommendation", recommendationSchema)