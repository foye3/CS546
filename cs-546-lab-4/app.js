const todo = require("./todo.js");
async function main() {
    try {
        console.log("Add first task");
        let create = await todo.createTask("Ponder Dinosaurs",
            "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        let getall =  await todo.getAllTasks();
        console.log(getall);
        console.log();
    
        console.log("Add second task");    
        create = await todo.createTask("Play Pokemon with Twitch TV","Should we revive Helix?");
         getall =  await todo.getAllTasks();
        console.log(getall);
        console.log();
    
        console.log("Remove first task");  
        const remove = await todo.removeTask(getall[0]._id);
         getall =  await todo.getAllTasks();
        console.log(getall);    
        console.log();
    
        console.log("Compelete remain task");    
        const complete = await todo.completeTask(getall[0]._id);
         getall =  await todo.getAllTasks();
        console.log(getall);
        console.log();
    } catch (error) {
        console.log(error);
    }
    

}

main();