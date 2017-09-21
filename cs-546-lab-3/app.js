const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));


async function main(i) {
    const filecheck = fs.existsSync(`./chapter${i}.result.json`);
    if(filecheck){
        try {
            const filejson = await fileData.getFileAsJSON(`./chapter${i}.result.json`);
            console.log(filejson);
        } catch (error) {
            console.log(error);
        }
        
    }else{
        try {
            let filestr = await fileData.getFileAsString(`./chapter${i}.txt`);
            filestr = textMetrics.simplify(filestr);
            await fileData.saveStringToFile(`chapter${i}.debug.txt`,filestr);
            let result = textMetrics.createMetrics(filestr);
            await fileData.saveJSONToFile(`chapter${i}.result.json`,result);
        } catch (error) {
            console.log(error);   
        }
        
    }
}

main(1);
main(2);
main(3);


