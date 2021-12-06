/* sinead: node v16.13.1; npm: 8.1.2
   mohamed: node v16.13.1; npm: 8.1.2  */

   import myCollection from "./collection.js";
   import chalk from "chalk";
   
function describeItem(item){
    // fyi - can access item.name, item.count, item.whatILike
    // fyi - console.log(chalk.blue('Hello world!'));

    if (item.count === 1) {
        console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}`);
    } else {
       // console.log(`I have ${item.count} ${chalk.cyan(item.name)}s. Here's what I like about them: ${item.whatILike}`);
       console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}${chalk.cyan("s")}. Here's what I like about them: ${chalk.green(item.whatILike)}`);
    

       // oh wait - sudden thought - am i meant to not put the node-modules into git?
       // for now - i'll just push index.js and package .json and i'll ask on slack.
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
