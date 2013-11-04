/*Now we're going to combine the second and third assignments. 
Write an asynchronous loop that runs a fixed number of times 
within an outer loop that runs forever (until the user types 'exit'). 
The inner loop should store its results with an array, as in assignment #3. 
The outer loop will console.log() the latest contents of the array, 
prompt the user and exit if the user types 'exit', and launch another 
iteration of the fixed iteration inner loop otherwise.*/

var read = require('read');
var iceCreamFlavors = [];

read({prompt: 'What\'s your favorite ice cream?'}, function iceCream(err, result) {
        iceCreamFlavors.push(result);
        console.log('You typed: ' + result);

        read({prompt: 'What\'s your other favorite ice cream?'}, iceCream);
      	 console.log(iceCreamFlavors);
         if (result === 'exit' ) {
            process.exit();
    }
    
    });