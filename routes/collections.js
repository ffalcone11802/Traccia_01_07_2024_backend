const express = require("express")

const { getAllCollections, getNewCollection} = require("../controllers/collectionController")

const router = express.Router()

router.get("/", getAllCollections)

router.get("/:id", getNewCollection)

module.exports = router