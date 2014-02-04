var read = require('read');

var array = [];


function Start() {

	var size = 0;
	//console.log("How many words would you like in your headline? ");
	
	read({prompt: "How many words would you like in your headline? "}, function (err, result){
		
		var size = result;

		if(isNaN(size)){
			console.log("ERROR: Please enter a number");
			Start();
		}else{
			//size = result;
			console.log("");
			Process(size, 0);
		};

	});


};


function Process(size, counter) {
	var size = size;
	var counter = counter;


	read({prompt: "Type input here: "}, function (err, result){

		//var size = size;
		
		if(result != "exit" && result != "quit" && counter < size){

			counter++;
			console.log("Word " + counter + " of " + size);
			console.log("----------------");
			array.push(result);

			if(counter < size){
			Process(size, counter);
			}else{
				Spell(size);
			};

		} else {
			console.log("You have elected to exit the program! Bye bye...");
			};

	});

};


function Spell(size) {
	console.log("");
	console.log(array.join(' '));
};

//Process();
Start();