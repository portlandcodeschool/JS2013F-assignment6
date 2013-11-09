var read = require("read");


var array = [];
var max = 4;

function OutsideLoop () {

	if(array.length < max - 1){
	
	read({prompt: "> "}, function (err, result){
		if(result != "exit"){

			console.log("");
			console.log(result);
			console.log("Type in more input or type 'exit' to end the program.");
			console.log("");
			OutsideLoop();
			InsideLoop(result);

		} else{
			process.exit()
		};

	});

	}else{

	read({prompt: "Here's an array of your own words: "}, function (err, result){
		if(result != "exit"){
			console.log("");
			console.log(result);
			console.log("Type in more input or type 'exit' to end the program.");
			console.log("");
			OutsideLoop();
			InsideLoop(result);

		} else{
			process.exit()
		};

	});
	setTimeout(function() {Pointer();}, 1);

	};



};


function Pointer () {
	process.stdout.write("> ");

};


function InsideLoop (result) {

	array.push(result);
	if(array.length === max){
		console.log("");
		console.log(array.join(" "));
		array = [];
	};

};

OutsideLoop();
