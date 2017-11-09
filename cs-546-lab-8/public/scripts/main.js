var myForm = document.getElementById('palForm');

/* This is the eventListener for the submit button click */
myForm.addEventListener('submit', function(e)
{
    e.preventDefault();
    var possPalindrome = document.getElementById("inputText").value;

    if (possPalindrome != ""){
       
        var node=document.createElement("li");

        node.className = isPalindrome(possPalindrome);
        var textnode=document.createTextNode(possPalindrome);
        node.appendChild(textnode);

        document.getElementById('palList').appendChild(node);
        document.getElementById("inputText").value = "";
    } else {
        
        alert("You must enter some text to check!");
    }
}); 

function isPalindrome(text){
    if (text === undefined){
        return;
    }
    var originalString = text.toLowerCase().replace(/[^\w]|_/g, "");

    var reversedString = text.toLowerCase().replace(/[^\w]|_/g, "").split("").reverse().join("");

    if (originalString == reversedString){
        return 'is-palindrome';
    } else{
        return 'not-palindrome';
    }
}