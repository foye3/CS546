module.exports = {
    simplify,
    createMetrics
}

function simplify(text){
    if(!text) throw "No text provided";
    if (typeof text !== 'string') {
        throw 'text must be string';
    }
    return text.toLowerCase().replace(/[^a-z0-9\s]/g,"").replace(/\s+/g," ");
}

function createMetrics(text){
    if(!text) throw "No text provided";
    if (typeof text !== 'string') {
        throw 'text must be string';
    }
    text = module.exports.simplify(text);
    let result = new Object();
    result.totalLetters = text.match(/[a-z0-9]/g).length;
    result.totalWords = text.match(/\w+/g).length;
    result.longWords = text.match(/\w{6,}/g) === null ? 0 :text.match(/\w{6,}/g).length;
    result.uniqueWords = Object.keys(calculateOccur(text)).length;
    result.averageWordLength = parseFloat((result.totalLetters / result.totalWords).toFixed(2));
    result.wordOccurrences = calculateOccur(text);
    return result;
}

function calculateOccur(text){
    let textarr = text.trim().split(/\s+/);
    let wordoccur = textarr.reduce(function (allwords , word){
        if(word in allwords){
            allwords[word] ++;
        }else{
            allwords[word] = 1;
        }
        return allwords;
    },{});
    return wordoccur;
}