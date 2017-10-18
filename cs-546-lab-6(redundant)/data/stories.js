const mongoCollections = require("../config/mongoCollections");
const stories = mongoCollections.story;

async function getStories(){
    try {
        const storyCollection = await stories();
        const allStories = await storyCollection.find({}).toArray();
        return allStories;
    } catch (error) {
        throw error;
    }
    
}

async function createStory(storyTitle,story){
    if(!storyTitle || !story) 
        throw "You must provide a storyTitle, story";
    try {
        
        let newStory = {
            storyTitle : storyTitle,
            story : story
        }
        const storycollection = await stories();
        const insertInfo = await storycollection.insertOne(newStory);
        if(insertInfo.insertedCount === 0 ) throw "Could not create story";
        const savedStory = await this.getStories();
        return savedStory;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getStories
};