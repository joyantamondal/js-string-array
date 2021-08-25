
// *************sorted numbers using sort function
const numbers = [5,8,1,4,2,3,6,7];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);


//**************sorted name using sort function
const friends = ['Joyanta','Joy','Mondal','Biki','John Doe','Alexa'];
const sortedNames = friends.sort();
console.log(sortedNames);

//**************sorted  reverse name using sort function
const friends = ['Joyanta','Joy','Mondal','Biki','John Doe','Alexa'];
const sortedName = friends.sort().reverse();
console.log(sortedName);

// *************** sorting big Numbers
const bigNumbers = [60,10,50,40,20,70,30];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumbers);



