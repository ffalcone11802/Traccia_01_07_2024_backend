const express = require("express")
const { addUser, addItem } = require("../controllers/userController")
const router = express.Router()

router.post("/", addUser)
router.post("/item-adding", addItem)

module.exports = router