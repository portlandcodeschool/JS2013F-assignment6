/*
Now we're going to combine the second and third assignments. 

Write an asynchronous loop that runs a fixed number of times within an outer 
loop that runs forever (until the user types 'exit'). 

The inner loop should store its results with an array, as in assignment #3. 

The outer loop will console.log() the latest contents of the array, 
prompt the user and exit if the user types 'exit', and launch another iteration 
of the fixed iteration inner loop otherwise.
*/

var read = require('read');
var names = [];

loop();

function loop () {
  console.log("Would you like to loop? Type 'yes' or 'exit'.")
  read({prompt: '>'}, intro);
  return;
}

function intro(err, answer, isDefault) {
  if (answer === "exit") {
    console.log("Bye bye!");
    process.exit();

  } if (answer === "yes") {
    getName();
    return;
  }
}

function getName(err, result, isDefault) {
  names.push(result);

  if (names.length === 4) {
    console.log(names);
    process.exit();

  } else {
    console.log("What's your name?");
    read({prompt: '>'}, getName);
    return names;
  }
    loop();
}




 