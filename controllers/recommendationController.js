const Recommendation = require("../models/recommendationModel")


const getAllRecommendation = async (req, res) => {
    try {
        const recommendation = await Recommendation.find({})
        res.status(200).json({msg: "ok", recommendation: recommendation})
    } catch (err) {
        res.status(500).json({msg: "error", err: err})
    }
}

const createRecommendation = async (req, res) => {
    try {
        const recommendation = await Recommendation.create({...req.body})
        res.status(200).json({msg: "ok", recommendation: recommendation})
    } catch (err) {
        res.status(500).json({msg: "error", err: err})
    }
}

module.exports = {
    getAllRecommendation,
    createRecommendation
}