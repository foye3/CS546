const mongoCollections = require("../config/mongoCollections");
const educations = mongoCollections.education;

async function getEducations(){
    try {
        const educationCollection = await educations();
        const allEducations = await educationCollection.find({}).toArray();
        return allEducations;
    } catch (error) {
        throw error;
    }
    
}
async function createEducation(schoolName,degree,favoriteClass,favoriteMemory){
    if(!schoolName || !degree || !favoriteClass || !favoriteMemory) 
        throw "You must provide a name, degree, favorite class and favorite memory";
    try {
        
        let newEducation = {
            schoolName : schoolName,
            degree : degree,
            favoriteClass : favoriteClass,
            favoriteMemory : favoriteMemory
        }
        const educollection = await educations();
        const insertInfo = await educollection.insertOne(newEducation);
        if(insertInfo.insertedCount === 0 ) throw "Could not create education";
        const savededu = await this.getEducations();
        return savededu;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getEducations,
    createEducation
};