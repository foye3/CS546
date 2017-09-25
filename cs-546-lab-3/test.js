const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

console.log(textMetrics.simplify("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23"));

console.log(textMetrics.createMetrics("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23"));

let testobj = textMetrics.createMetrics("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23");
let testJson = fileData.saveJSONToFile("./test.json", testobj);


let readjson = fileData.getFileAsString("./test.json")
console.log(readjson);