/*In this assignment you're going to write an asynchronous loop. 
Use the read module to repeatly prompt the user for input. 
Break the loop (and exit the program) when the user types 'exit'. 
Remember to use ```process.exit()`` to instruct your node program to terminate.
*/

var read = require('read');
var name = "";

intro();

function intro() {
  console.log("What's your name?");
  read({prompt: '>'}, getName);
  return;
}

function getName(err, result, isDefault) {
	name = result;
	
	if (result === "exit") {
	  console.log("Bye bye!");
	  process.exit();
	}

	intro();
	return name;
}