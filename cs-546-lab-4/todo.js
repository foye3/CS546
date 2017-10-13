const mongoCollections = require("./mongoCollections.js");
const uuid = require("uuid/v4");
const tasks = mongoCollections.todoItems;

async function createTask(title, description){
    if(!title || !description) throw "You must provide a title and a description";
    try {
        let newid = uuid();
        //console.log("id: "+newid);
        let newTask = {
            _id : newid,
            title : title,
            description : description,
            completed : false,
            completedAt : null
        }
        const taskcollection = await tasks();
        const insertInfo = await taskcollection.insertOne(newTask);
        if(insertInfo.insertedCount === 0 ) throw "Could not create task";
        const task = await this.getTask(newid);
        return task;
    } catch (error) {
        throw error;
    }
}

async function getAllTasks(){
    try {
        const taskcollection = await tasks();
        const alltasks = await taskcollection.find({}).toArray();
        return alltasks;
    } catch (error) {
        throw error;
    }
    
}

async function getTask(id){
    if(!id) throw "You must provide an id to search for";
    try{
        const taskcollection = await tasks();
        const task = taskcollection.find({_id: id}).toArray();
        if(task === null) throw `No task  with id of ${id}`;
        return task;
    }catch (error) {
        throw error;
    }
}

async function completeTask(taskId){
    if(!taskId) throw "You must provide an id to search for";
    try{
        const taskcollection = await tasks();
        let date = new Date();
        const updateInfo = await taskcollection.updateOne(
            { _id: taskId },
            { $set: 
                {
                    completed: true,
                    completedAt: date
                }
            });
        if(updateInfo.modifiedCount === 0) {
            throw `Could not update task  with id of ${taskId}`;
        }
        return await this.getTask(taskId);
    }catch (error) {
        throw error;
    }
    
}

async function removeTask(id){
    if(!id) throw "You must provide an id to search for";
    try{
        const taskcollection = await tasks();
        const deletionInfo = taskcollection.removeOne({_id:id});
        if(deletionInfo.deletedCount === 0){
            throw `Could not delete task with id of ${id}`;
        }
        return true; 
    }catch (error) {
        throw error;
    }
       
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}
