const fs = require('fs');
var zero = 0;
var one = 0;
char = 0;

const textToArray = (path) => {
    const text = fs.readFileSync(path, 'utf8');
    const textByLine = text.split('\n');
    return textByLine
}

var array = textToArray('textt.txt')
var gammaRateArray = [];
var epsilonRateArray = [];
while(char < 12){
    for(i = 0; i < array.length; i++){ 
        if(array[i].charAt(char) == 0){
            zero += 1
        
        }
        else if(array[i].charAt(char) == 1){
            one += 1
        }
    }
    char++;  
    if(zero > one){
        gammaRateArray.push (0)
        epsilonRateArray.push (1)
    }
    else{
        gammaRateArray.push (1)
        epsilonRateArray.push (0)
    }
     zero = 0;
     one = 0;
}
 
let gRate = gammaRateArray.join('')
gRate = parseInt(gRate,2)
let eRate = epsilonRateArray.join('')
eRate =parseInt(eRate,2)

console.log(gRate*eRate)





