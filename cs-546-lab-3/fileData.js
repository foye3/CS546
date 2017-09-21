const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

module.exports = {
    getFileAsString: async function (path){   
        if(!path) {
            throw "No path provided";
        }
        if (typeof path !== 'string') {
			throw 'path must be string';
		}
        let fileContent = await fs.readFileAsync(path,"utf-8");
        
        return fileContent;
        //console.log(fileContent);
        
    },

    getFileAsJSON: async function (path){
        if(!path) {
            throw "No path provided";
        }
        if (typeof path !== 'string') {
			throw 'path must be string';
		}
        let fileContent = await fs.readFileAsync(path,"utf-8");
        let fileJson = JSON.parse(fileContent);
        
        return fileJson;
    },
    
    saveStringToFile: async function(path, text){
        if(!path) throw "No path provided";
        if(!text) throw "No text provided";
        if (typeof path !== 'string' || typeof text !== 'string') {
			throw 'path and text must be string';
		}

        let result = await fs.writeFileAsync(path,text);
        return result;
    },

    saveJSONToFile: async function(path, obj){
        if(!path) throw "No path provided";
        if(!obj) throw "No obj provided";
        if (typeof path !== 'string') {
			throw 'path must be string';
		}
        let result = await fs.writeFileAsync(path,JSON.stringify(obj));
        return result;
    }

   
}
