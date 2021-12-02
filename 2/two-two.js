const fs = require('fs');
var forward = 0;
var aim = 0;
var depth = 0;

const textToArray = (path) => {
    const text = fs.readFileSync(path, 'utf8');
    const textByLine = text.split('\n');
    return textByLine
}

var array = textToArray('day2.txt')
var letterArray = [];
var numberArray = [];

for(i = 0; i < array.length; i++){
    if(array[i].charAt(0) == 'f'){
        numberArray.push (array[i].charAt(8))
        letterArray.push (array[i].charAt(0))
    }
    else if(array[i].charAt(0) == 'u'){
        numberArray.push (array[i].charAt(3))
        letterArray.push (array[i].charAt(0))
    }
    else{
        numberArray.push (array[i].charAt(5)) 
        letterArray.push (array[i].charAt(0))
        
    }
}  
numberArray = numberArray.map(Number)
    for (i = 0; i < letterArray.length; i++){
        
        if(letterArray[i].charAt(0) == 'f'){
            forward += numberArray[i]
            depth += (numberArray[i] * aim)
            
        }
        else if(letterArray[i].charAt(0) == 'd'){
            aim += numberArray[i]
            
        }
        else{
            aim -= numberArray[i]  
        }
       
        
    }
    console.log(depth * forward)

