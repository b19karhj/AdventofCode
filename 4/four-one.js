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
var numbers = firstarray.splice(0,1)[0].split(',');
var allBricks = [];
var testArray = [];



for(let row = 0; row < firstarray.length -1; row++){
    
    if(firstarray[row].length == 1){
        continue;
    }
    var brick = [];
    for(let i = 0; i < 5; i++){
        brick.push (firstarray[row+i].trim().split(/[\s,\t]+/));
        
    }
    row += 4;
    allBricks.push (brick);
}

// numbers.forEach(function(numb){
//     console.log(numb+'hej')
//     allBricks.forEach(function(row){
//         row.forEach(function(col){
//             col.forEach(function(number){
//                 console.log(number)
//             });
//         });
//     });
// })
var tempresult= [];
for(let ball = 0; ball < numbers.length; ball++){
    // console.log(numbers[ball+'------------'])
    numbers[ball]
    for(let row = 0; row < allBricks.length; row++){
        // console.log(allBricks[row][ball])
        allBricks[row][ball]
        for(let col = 0; col < allBricks[row].length; col++){
            // console.log(allBricks[row][col])
            for(let number = 0; number < allBricks.length -1; number++){
               allBricks[row][col][number]
                if(numbers[ball] == allBricks[row][col][number]){
                    console.log('hej')
                    tempresult.push (allBricks[row][col])
                    // console.log(numbers[ball])
                    console.log(allBricks[row][col])
                    
                }
                
                
            }   
        }   
    }
}
// for(let i = 0; i < tempresult.length ; i++){
//     console.log(tempresult[i])
// }
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


