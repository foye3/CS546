const mongoCollections = require("../config/mongoCollections");
const about = mongoCollections.about;

async function getAbout(){
    try {
        const aboutCollection = await about();
        const allabout = await aboutCollection.find({}).toArray();
        return allabout;
    } catch (error) {
        throw error;
    }
    
}

async function createAbout(name,biography,favoriteShows,hobbies){
    if(!name || !biography || !favoriteShows || !hobbies) 
        throw "You must provide a name, biography, favoriteShows and hobbies";
    try {
        
        let newAbout = {
            name : name,
            biography : biography,
            favoriteShows : favoriteShows,
            hobbies : hobbies
        }
        const aboutcollection = await about();
        const insertInfo = await aboutcollection.insertOne(newAbout);
        if(insertInfo.insertedCount === 0 ) throw "Could not create about";
        const savedabout = await this.getAbout();
        return savedabout;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAbout,
    createAbout
};