const fs = require('fs');
var zero = 0;
var one = 0;
var test = 0;
var p1 = 0;
var p2 = 0;


const textToArray = (path) => {
    const text = fs.readFileSync(path, 'utf8');
    const textByLine = text.split('\n');
    return textByLine
}
const array = textToArray('day3.txt')
var  oxygen = [];
var  co2  = [];
var sarray  = [];
var testarray = [];
while(p1 < 12 ){
    while(co2 == 0){
        for(i = 0; i < array.length -1; i++){ 
            if(array[i].charAt(test) == 0){
                zero += 1  
            }
            else if(array[i].charAt(test) == 1){
                one += 1 
            }
        }
        break;   
    }
    if(zero < one){
        if(co2 == 0){ 
            co2 = array.filter((numbers) => numbers.startsWith(0)); 
        }
        else if(co2.length <= 1){
           
            p1 = array.length
        }
        else{
            co2= co2.filter((numbers) => numbers.charAt(test)==(0));
        }
    }
    else if(zero > one){
        if(co2 == 0){  
            co2 = array.filter((numbers) => numbers.startsWith(1));  
        }
        else if(co2.length <= 1){
            
            p1 == array.length
        }
        else{
            co2 = co2.filter((numbers) => numbers.charAt(test)==(1));
        }
    }
    else if(zero == one){
        co2 = co2.filter((numbers) => numbers.charAt(test)==(0));    
    }
    test++;
    zero = 0;
    one = 0; 
    for(i = 0; i < co2.length; i++){
        if(co2[i].charAt(test) == 0){
            zero += 1  
        }
        else if(co2[i].charAt(test) == 1){
            one += 1 
        }
    }
    p1++; 
} 

test = 0;
while(p2 < 12){
    while(oxygen == 0){
        for(i = 0; i < array.length -1; i++){ 
            if(array[i].charAt(test) == 0){
                zero += 1  
            }
            else if(array[i].charAt(test) == 1){
                one += 1 
            }
        }
        break; 
    }
    if(zero < one){
        if(oxygen == 0){
            oxygen = array.filter((numbers) => numbers.startsWith(1));
        }
        else if(oxygen.length <= 1){
           
            p2 = array.length
        }
        else{
            oxygen = oxygen.filter((numbers) => numbers.charAt(test)==(1));
        }
    }
    else if(zero > one){
        if(oxygen == 0){
           
            oxygen = array.filter((numbers) => numbers.startsWith(0));
            
        }
        else if(oxygen.length <= 1){
            
            p2 == array.length
        }
        else{
            oxygen = oxygen.filter((numbers) => numbers.charAt(test)==(0));
        }
    }
    else if(zero == one){
        oxygen = oxygen.filter((numbers) => numbers.charAt(test)==(1));
    }
    test++;
    zero = 0;
    one = 0; 
    for(i = 0; i < oxygen.length; i++){
        if(oxygen[i].charAt(test) == 0){
            zero += 1  
        }
        else if(oxygen[i].charAt(test) == 1){
            one += 1 
        }
    }
    p2++;
}

let gRate = co2.join('')
gRate = parseInt(gRate,2)
let eRate = oxygen.join('')
eRate =parseInt(eRate,2)

console.log(gRate*eRate)


