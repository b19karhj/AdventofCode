const fs = require('fs');
var forward = 0;
var up = 0;
var down = 0;

const textToArray = (path) => {
    const text = fs.readFileSync(path, 'utf8');
    const textByLine = text.split('\n');
    return textByLine
}

var array = textToArray('day2.txt')
var numbersforward = [];
var numbersup = [];
var numbersdown = [];

for(i = 0; i < array.length; i++){
    if(array[i].charAt(0) == 'f'){
        numbersforward.push (array[i].charAt(8))
        
    }
    else if(array[i].charAt(0) == 'u'){
        numbersup.push (array[i].charAt(3))
    }
    else{
        numbersdown.push (array[i].charAt(5)) 
        
    }
}  
numbersforward = numbersforward.map(Number)
numbersup = numbersup.map(Number)
numbersdown = numbersdown.map(Number)


    for (j = 0; j < numbersforward.length; j++){
        forward += numbersforward[j]
       
    }
    for(k = 0; k < numbersup.length; k++){
        up += numbersup[k]
        
        
    }
    for(h = 0; h < numbersdown.length; h++){
        down += numbersdown[h]
     
        
    }


console.log((down-up) * forward);