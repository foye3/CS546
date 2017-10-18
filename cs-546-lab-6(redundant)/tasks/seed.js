const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const about = data.about;
const educations = data.educations;
const stories = data.stories;

async function generate() {
    try {
        const db = await dbConnection();
        db = await db.dropDatabase();
        let favoriteShows = ["Person Of Interest", "Friends", "Game of Thrones"];
        let hobbies = ["Soccer", "Cycling", "Traveling"];
        await about.createAbout("Fan Zhang", "I am Fan Zhang. \n A graduate student at Stevens Institute of Technology."
            , favoriteShows, hobbies);
        await educations.createEducation("Tianjin University of Technology", "Bachlor of Engineering", "Cyber Security", "In the second year, we got a subway station near the school.")
        await educations.createEducation("Stevens Institute of Technology", "Master of Science", "Web Programming", "Pierce Dining Hall has great view of Manhattan.")
        await stories.createStory("A mushroom joke", "A mushroom goes into a bar and sits down to order a drink. Bartender walks over and says, \"I'm sorry sir, but we don't serve your kind here.\" The mushroom sits back and asks ,\"Why not? I'm a fun guy (fungi)!\"")
        console.log("Done seeding database.");
        db.close();
    } catch (error) {
        console.log(error);
    }
}

