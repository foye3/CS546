const express = require("express");
const router = express.Router();
const data = require("../data");
const educationsData = data.educations;

router.get("/",async (req,res) => {
    try {
        const educations = await educationsData.getEducations();
        res.json(educations);
    } catch (error) {
        //not found
        res.status(404).json({message: "not found"});
    }
});

module.exports = router;

