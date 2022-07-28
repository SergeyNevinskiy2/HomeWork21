'use strict';

const mainFunction = callback => {
    const num = prompt('Enter number');
    const degree = prompt('Enter number degree');
    if(isNaN(num) && isNaN(degree)) throw new Error('is not number');
    if(num === '' && degree === '') throw new Error('Empty string');
    if(num === null && degree === null) throw new Error('You cancel');
    return callback(num, degree);
}

const exponentiation =  (num, degree) => {
    const result = Math.pow (num, degree);
    alert(result);
    return result;
}

const  multiplay =  (num, degree) => {
    const result =  num * degree;
    alert(result);
    return result;
}

const  division =  (num, degree) => {
    const result =  num / degree;
    alert(result);
    return result;
}

 
const  modulo =  (num, degree) => {
    const result =  num % degree;
    alert(result);
    return result;
}


console.log (mainFunction(exponentiation));
console.log (mainFunction(multiplay));
console.log (mainFunction(division));
console.log (mainFunction(modulo));
