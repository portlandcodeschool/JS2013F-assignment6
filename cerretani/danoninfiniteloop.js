/*Adapt the code from the previous assignment so that the loop 
runs a certain number of times. As the loop runs, push the results 
from each iteration into an array that's visible at top level scope. 
When the set number of iterations are complete console.log() 
out the contents of the array.*/

var read = require('read');
var iceCreamFlavors = [];

read({prompt: 'What\'s your favorite ice cream?'}, function iceCream(err, result) {
	iceCreamFlavors.push(result);
	console.log('You typed: ' + result);
	

    if (iceCreamFlavors.length === 3 ) {
    	console.log(iceCreamFlavors);
    	process.exit();
    };
    
    read({prompt: 'What\'s your other favorite ice cream?'}, iceCream);
});
