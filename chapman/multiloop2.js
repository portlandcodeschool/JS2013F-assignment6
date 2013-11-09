var read = require("read");


var array = [];
var max = 4;

read({prompt: "> "}, OutsideLoop);

function OutsideLoop (err, result) {

	if(result != "exit"){
		console.log("");

		console.log(result);
		console.log("Type in input or type 'exit' to close the program.");
		InsideLoop(result);

	}else{
		process.exit();
	};

read({prompt: "> "}, OutsideLoop);
};




function InsideLoop (result) {

	array.push(result);
	if(array.length === max){
		console.log("");
		console.log("Here's an array of the words you typed: ");
		console.log(array.join(" "));
		array = [];
	};

};

