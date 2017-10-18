const express = require("express");
const router = express.Router();
const educationsData = [
    {
      "schoolName": "Tianjin University of Technology",
      "degree": "Bachlor of Engineering",
      "favoriteClass": "Cyber Security",
      "favoriteMemory": "In the second year, we got a subway station near the school."
    },
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "Master of Science",
      "favoriteClass": "Web Programming",
      "favoriteMemory": "Pierce Dining Hall has great view of Manhattan."
    }
];

router.get("/",async (req,res) => {
    try {
        res.json(educationsData);
    } catch (error) {
        //not found
        res.status(500).send();
    }
});

module.exports = router;

