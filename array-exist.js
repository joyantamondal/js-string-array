function megaFriend(friends){
    if(Array.isArray(friends)==false){
        return 'please input array of strings';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['djhsjdadskjladjk','djjjjjjjjjjjhhhhhhhhh','joyanta','joy','jerry'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);

//indexOf checkng
if(friends.indexOf('joy')!=-1){
    console.log('Lion Exist');
}
//includes checking
if(friends.includes('jerry')){
    console.log('jerry is exist');
}