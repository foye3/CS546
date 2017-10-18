const express = require("express");
const router = express.Router();
const aboutData = {
    "name": "Fan Zhang",
    "biography": "I am Fan Zhang. \nA graduate student at Stevens Institute of Technology.",
    "favoriteShows": ["Person Of Interest", "Friends", "Game of Thrones"],
    "hobbies": ["Soccer", "Cycling", "Traveling"]
};

router.get("/", (req,res) => {
    try {
        return res.json(aboutData);
    } catch (error) {
        //not found
        return res.status(500).send();
    }
});

// router.post();

module.exports = router;