const express = require("express");
const router = express.Router();
const data = require("../data");
const aboutData = data.about;

router.get("/",async (req,res) => {
    try {
        const about = await aboutData.getAbout();
        return res.json(about);
    } catch (error) {
        //not found
        return res.status(404).json({message: "not found"});
    }
});

// router.post();

module.exports = router;