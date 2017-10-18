const express = require("express");
const router = express.Router();
const data = require("../data");
const storiesData = data.stories;

router.get("/",async (req,res) => {
    try {
        const stories = await storiesData.getStories();
        res.json(stories);
    } catch (error) {
        //not found
        res.status(404).json({message: "not found"});
    }
});

module.exports = router;