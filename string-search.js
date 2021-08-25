const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone Dell',
    'Dell yellow laptop with black camera',
    '1x59 Lenevo Yoga Laptop Dell',
    'HTC low price phone',
    'Dell purple color phone with laptop',
    'lg Laptop 2021 Dell'
];
const searching = 'laptop';
const includeSearch = 'phone';

//indexOf search
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase())!=-1){
        output.push(product);
    }
}
console.log(output);

const outputIncludeSearch = [];
// search using includes
for(const productAll of products){
if(productAll.toLowerCase().includes(includeSearch.toLowerCase())){
    outputIncludeSearch.push(productAll);
}
}
console.log(outputIncludeSearch);

// startswith search
const startWith = 'dell';
const outputStartWith = [];
for(const productStartWith of products){
    if(productStartWith.toLowerCase().startsWith(startWith.toLowerCase())){
        outputStartWith.push(productStartWith);
    }
}
console.log(outputStartWith);
//endsWith Search
const endWith = 'dell';
const outputEndstWith = [];
for(const productEndsWith of products){
    if(productEndsWith.toLowerCase().endsWith(endWith.toLowerCase())){
        outputEndstWith.push(productEndsWith);
    }
}
console.log(outputEndstWith);
