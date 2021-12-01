const fs = require('fs');
var activeValue = 1;

const textToArray = (path) => {
    const text = fs.readFileSync(path, 'utf8');
    const textByLine = text.split('\n');
    return textByLine
}

const array = textToArray('text.txt')

for(i = 0; i < array.length - 1; i++){
    if(array[i] < array[i+1]){
        activeValue += 1;
    }   
}
console.log(activeValue);
