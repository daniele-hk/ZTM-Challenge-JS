// Question 1

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const cTR = (newArray) => {
// sort array by number
    newArray = array.sort((a, b) => a - b)    
// Use reduce to store information in acc when needed
    const nestedArray = array.reduce((acc, num, i, arr) => {
// Compare and push num. If the previous and following num is equal, push it into a new array in the acc.
        if(num === arr[i-1]) {
            acc[acc.length-1].push(num);
        } else if(num === arr[i+1]) {    
            acc.push([num]);
// If num is different, just push it in the main array
        } else if(num !== arr[i+1]) {
            acc.push(num);
        } return acc;
    }, []);
    return nestedArray;
}

cTR(array)


// E.g. of an array to run
const mixArray = [1, 11, 777, 7, 'rip', 's', 54, '21', 'I went nuts with the previous exercise'];


const divArray = (newArray2) => {
// Create different array for custom values, and a global one to store them all
    const numberArray = [];
    const stringArray = [];
    const globalArray = [];
// Looping
    newArray2.forEach((value) => {
        if(typeof value === "number") {
            numberArray.push(value);
        } else if(typeof value === "string") {
            stringArray.push(value);
        }
        numberArray.sort((a, b) => a - b);
    });
    globalArray.push(numberArray, stringArray);
    return globalArray;
}

divArray(mixArray)

// Question 2

const qArray = [1,2, 3, 4, 5, 6, 7, 8, 9];

function twoFactor(array, target) {
    for(value1 of array) {
        for(value2 of array) {
            if((value1 + value2) === target) {
                return [value1, value2];
            }
        }
    } 
}
twoFactor(qArray, 10)

// Q3 

let hexValue1 = /*string*/;
let hexValue2 = /*string*/;
let hexValue3 = /*string*/; 
let rgbValue1 = /*number*/;
let rgbValue2 = /*number*/;
let rgbValue3 = /*number*/;

function colorConverter(value1, value2, value3) {
    if(typeof value1 === 'string' && typeof value2 === 'string' && typeof value3 === 'string') {
        value1 = parseInt(value1, 16);
        value2 = parseInt(value2, 16);
        value3 = parseInt(value3, 16);
        return `rgb(${value1}, ${value2}, ${value3})`;
    } else if(typeof value1 === 'number' && typeof value2 === 'number' && typeof value3 === 'number') {
        value1 = value1.toString(16);
        value2 = value2.toString(16);
        value3 = value3.toString(16);
        return `#${value1}${value2}${value3}`;
    }
}

colorConverter()