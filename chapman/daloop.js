var read = require('read');



function Process() {

	read({prompt: "Type input here: "}, function (err, result){
		
		if(result != "exit" && result != "quit"){
			console.log("----------------");
			console.log("	 Output: " + result);
			console.log("");
		} else{
			console.log("----------------");
			console.log("You have elected to exit the program! Bye bye...");
			console.log("");
			};

		if(result != "exit" && result != "quit"){
			Process();
		};

	});

};

Process();
