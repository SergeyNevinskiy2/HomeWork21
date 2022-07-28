'use strict';

const mainFunction = callback => {
    const num = prompt('Enter number');
    const degree = prompt('Enter number degree');
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
