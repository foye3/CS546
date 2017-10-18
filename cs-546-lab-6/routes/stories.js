const express = require("express");
const router = express.Router();
const storiesData = {
    "storyTitle": "A mushroom joke",
    "story": "A mushroom goes into a bar and sits down to order a drink. Bartender walks over and says, \"I'm sorry sir, but we don't serve your kind here.\" The mushroom sits back and asks ,\"Why not? I'm a fun guy (fungi)!\""
};

router.get("/", (req,res) => {
    try {
        res.json(storiesData);
    } catch (error) {
        //not found
        res.status(500).send();
    }
});

module.exports = router;