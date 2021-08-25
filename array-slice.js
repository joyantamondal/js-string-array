const numbers = [3,6,7,9,8,10,12,20,50];

// *********slice orginal array not changed
const numberSliced = numbers.slice(4,8);
console.log(numberSliced);
console.log(numbers);


// ********* splice remove element from an array
const numberSpliced = numbers.splice(4,2);
console.log(numberSpliced);
console.log(numbers);

//*********splice remove element and add another multi elements on that places
// const numberSpliced2 = numbers.splice(4,3,101,102,103,104);
// nothing delete but insert new elements using delete range 0 
const numberSpliced3 = numbers.splice(5,0,101,102,103,104);
// console.log(numberSpliced2);
console.log(numberSpliced3);
console.log(numbers);





