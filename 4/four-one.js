const fs = require('fs');
const { join } = require('path/posix');
const { stringify } = require('querystring');
const { text } = require('stream/consumers');

const textToArray = (path) => {
    const text = fs.readFileSync(path, 'utf8');
    const textByLine = text.split('\n');
    return textByLine
}
var firstarray = textToArray('test4.txt');
var number = firstarray.splice(0,1)[0].split(',');
var allBricks = [];
var testArray = [];

console.log(number.length)

for(let row = 0; row < firstarray.length -1; row++){
    
    if(firstarray[row].length == 1){
        continue;
    }
    var brick = [];
    for(let i = 0; i < 5; i++){
        brick.push (firstarray[row+i].trim().split(/[\s,\t]+/));
        // console.log((firstarray[row+i]))
    }
    row += 4;
    // allBricks.push (brick);
}
// for(let i = 0; i < allBricks.length; i++){
//     console.log(allBricks[i][0]);
//     console.log(allBricks[i][1]);
//     console.log(allBricks[i][2]);
//     console.log(allBricks[i][3]);
//     console.log(allBricks[i][4]);
//     console.log('');
// }

 






// for(let i = 0; i < myArray2.length; i++){
//     console.log(myArray2[i])
// }


