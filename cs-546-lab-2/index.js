const printShape = require("./printShape");
//console.log(printShape);
//printShape.printtriangle(3);
//printShape.printsquare(2);
for(let i = 0; i< 10; i++){
    printShape.printtriangle(Math.floor(Math.random()*(20 - 1)+ 1));

}

for(let i = 0; i< 10; i++){
    printShape.printsquare(Math.floor(Math.random()*(20 - 2)+ 2));

}

for(let i = 0; i< 10; i++){
    printShape.printrhombus(Math.floor(Math.random()*(10 - 2)+ 2)*2);

}
//const prompt = require("prompt");
