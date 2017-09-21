module.exports = {
    simplify: function (text){
        if(!text) throw "No text provided";
        if (typeof text !== 'string') {
			throw 'text must be string';
		}
        return text.toLowerCase().replace(/[^a-z0-9\s]/g,"").replace(/[\s]/g," ");
    },
    
    createMetrics: function (text){
        if(!text) throw "No text provided";
        if (typeof text !== 'string') {
			throw 'text must be string';
		}
        text = module.exports.simplify(text);
        let result = new Object();
        result.totalLetters = text.match(/[a-z]/g).length;
        result.totalWords = text.match(/\w+/g).length;
        result.longWords = text.match(/\w{6,}/g).length;
        result.averageWordLength = (result.totalLetters / result.totalWords).toFixed(2);
        result.uniqueWords = Object.keys(calculateOccur(text)).length;
        result.wordOccurrences = calculateOccur(text);
        
        console.log(result);
        return result;
    }
}

function calculateOccur(text){
    let textarr = text.split(" ");
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