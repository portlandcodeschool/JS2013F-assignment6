/*In this assignment you're going to write an asynchronous loop. 
Use the read module to repeatly prompt the user for input. 
Break the loop (and exit the program) when the user types 'exit'. 
Remember to use `process.exit() to instruct your node program to terminate.

Call this file daloop.js and add it to your working directory*/

var read = require('read');

read({prompt: 'What\'s your favorite ice cream?'}, function iceCream(err, result) {
	console.log("You typed: " + result);
    if (result === 'exit') {
    	process.exit();
    };
    read({prompt: 'What\'s your favorite ice cream?'}, iceCream);
});