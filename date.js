const myFavDate = new Date('1971-12-16');
console.log(myFavDate);

// another date 
const anotherDate = new Date(1971,9,16,12,24,80);
console.log(anotherDate);
if(myFavDate.getTime()> anotherDate.getTime()){
    console.log('another time  is later');
}