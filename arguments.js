// **********arguments use for multiple input numbers 
function addNumbers(){
    let result = 0;
    // arguments use for multiple input numbers 
    for(const num of arguments){
        result = result + num;
    }
    return result;
}
const sum = addNumbers(10,12,50,100,200);
console.log(sum);

function getFUllName(firstName, lastName){
    let fullName = '';
    for(const name of arguments){
     fullName = fullName+ name + ' ';
    }
    // const fullName = firstName+' '+lastName;
    return fullName;
}
const name = getFUllName('abcd','title','Joyanta', 'Mondal');
console.log(name);