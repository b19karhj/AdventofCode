const fs = require('fs');
var activeValue = 0;
let sum = 0;

const textToArray = (path) => {
    const text = fs.readFileSync(path, 'utf8');
    const textByLine = text.split('\n');
    return textByLine
}

var array = textToArray('text.txt')
array = array.map(Number)
for(i = 0; i < array.length ; i++){
    sum = (array[i] + array[i+1] + array[i+2])
    if(sum > result){
        activeValue +=1;
    }
    var result = sum
}
console.log(activeValue)