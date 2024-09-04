const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Item = require("./itemModel")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    }]
})

// Password hashing
userSchema.pre("save", function(next) {
  const user = this
  bcrypt.hash(user.password, 10)
  .then(h => {user.password = h; next()})
})

module.exports = mongoose.model("User", userSchema)