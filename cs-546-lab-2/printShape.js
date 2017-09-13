module.exports = {
    printtriangle: function(n){
        if(typeof n != 'number') throw "unexpect input type."
        if(n < 1) throw "input out of bounds."
        for(let level = 0; level < n; level ++){
            let str = "";
            for(let j = n - 1; j > level; j--){
                str += " ";
            }
            str += "/";
            for(let i = 0; i < level * 2; i++){
                str += level === n -1 ? "-" : " ";
            }
            str += "\\";
            console.log(str);
        }
        console.log("\n");        
    },

    printsquare: function(n) {
        if(typeof n != 'number') throw "unexpect input type."
        if(n < 2) throw "input out of bounds."
        let midrow = "|";
        let siderow = "|";
        for(let i = 0 ; i< n ;i++){
            midrow += " ";
            siderow += "-";
        }
        midrow += "|";
        siderow += "|";
        console.log(siderow);
        for(let j = n -2; j>0;j--){
            console.log(midrow);
        }
        console.log(siderow);
        console.log("\n");
    },

    printrhombus: function(n){
        if(typeof n != 'number') throw "unexpect input type."
        if(n < 2) throw "input out of bounds."
        if(n % 2 != 0) throw "input must be even number."
        for(let level = 0; level < n/2; level ++){
            let str = "";
            for(let i=n/2 -1;i > level;i--){
                str+=" ";
            }
            str+="/";
            for(let j = 0;j<level*2+1;j++){
                str += level === 0? "-":" ";
            }
            str+="\\";
            console.log(str);
        }
        for(let level = 0; level < n/2; level ++){
            let str = "";
            for(let i=0;i < level;i++){
                str+=" ";
            }
            str+="\\";
            for(let j = 0;j < (n/2 - level )*2 - 1 ;j++){
                str += level === n/2 -1 ? "-":" ";
            }
            str+="/";
            console.log(str);            
        }
        console.log("");
    }


};