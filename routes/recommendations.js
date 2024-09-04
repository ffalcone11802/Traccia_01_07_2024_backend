const express = require("express")

const { getAllRecommendation, createRecommendation} = require("../controllers/recommendationController")


const router = express.Router()

router.get("/", getAllRecommendation)

router.post("/", createRecommendation)

module.exports = router