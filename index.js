/* sinead: node v16.13.1; npm: 8.1.2
   mohamed: node v16.13.1; npm: 8.1.2  */

let myCollection = [
    {
        name: "School of Code mug",
        count: 1,
        whatILike: "It has my cute pixel character on it!"
    },
    {
        name: "School of Code hat",
        count: 2,
        whatILike: "An often overlooked fashion accessory"
    }, 
    {
        name: "School of Code pillow",
        count: 1,
        whatILike: "Eat. Sleep. Code. Repeat :)"
    }
];

function describeItem(item){
    // fyi - can access item.name, item.count, item.whatILike
    if (item.count === 1) {
        console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`)
    } else {
        console.log(`I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}`)
    }
}
   
function describeCollection (myArrayOfObjects){
    //for (i=0; i < myArrayOfObjects.length; i++){
    //   describeItem(myArrayOfObjects[i]);}
    myArrayOfObjects.forEach(describeItem);
}

describeCollection(myCollection);

//describeItem(myCollection[0]);
//describeItem(myCollection[1]);
//describeItem(myCollection[2]);

//console.log(myCollection);
