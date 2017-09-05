function sumOfSquares(x, y, z){
    for(let i = 0; i < sumOfSquares.arguments.length; i++){
        if(typeof arguments[i] != 'number') throw 'unexpected input data type';
    }
    return x * x + y * y + z * z;
}

// console.log(sumOfSquares(2,3,4)); 
// console.log(sumOfSquares(8,0,200)); 
// console.log(sumOfSquares(-2,-23,-4)); 
// console.log(sumOfSquares('5',3,4)); 
//console.log(sumOfSquares(2,1000000000,4)); 

function sayHelloTo(firstName, lastName, tittle){
   
    if(typeof firstName != 'string' || (typeof lastName != 'string' && typeof lastName != 'undifined')
        || (typeof tittle != 'string' && typeof tittle != 'undifined')){
        throw 'unexpected input data type';
    }
    let res;
    if(sayHelloTo.arguments.length === 3){
        res = `Hello, ${tittle} ${firstName}${lastName}! Have a good evening!`;
    }else if(sayHelloTo.arguments.length === 2){
        res = `Hello, ${firstName} ${lastName}. I hope you are having a good day!`
    }else if(sayHelloTo.arguments.length === 1){
        res = `Hello, ${firstName}!`
    }else{
        throw 'A string describing an error';
    }
    console.log(res);
}

//sayHelloTo();
// sayHelloTo('Fan');
// sayHelloTo('Fan','Zhang');
// sayHelloTo('Fan','Zhang','Mr.');

function cupsOfCoffee(n){
    if(typeof n != 'number' && n <= 0) throw 'unexpected input data type';
    if(n <= 0) throw 'input out of boundary';
    let res;

    for(let i = n; i > 0; i--){
        res =res.concat(
        `${i} cup${i > 1 ? 's' : ''} of coffee on the desk! ${i} cup${i > 1 ? 's' : ''} of coffee! 
Pick one up, drink the cup, ${i - 1 === 0 ? 'no more' : i - 1} cup${i - 1 > 1 ? 's' : ''} of coffee on the desk!\n`);
    }
    return res;
}

//console.log(cupsOfCoffee(5));

function occurrencesOfSubstring(given, substring){
    if(typeof given != 'string' || typeof substring != 'string') throw 'unexpected input data type';

    let pos = given.indexOf(substring);
    let count = 0;
    
    while(pos > -1){
        count++;
        pos = given.indexOf(substring,++pos);
    }
    return count;
}

//console.log(occurrencesOfSubstring("hello world", "o"));
//console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));

function randomizeSentences(paragraph){
    if(typeof paragraph != 'string') throw 'unexpected input data type';
    let arr = paragraph.split(/[\.!?]+/);
    console.log(arr);
    for(let i = arr.length - 1; i >= 0; i-- ){
        let j = Math.floor(Math.random() * (i));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    //return arr;
}

let string = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(string));

ss