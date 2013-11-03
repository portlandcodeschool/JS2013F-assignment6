/*This assignment is meant to demonstrate that other things can be 
happening in the background while your program is waiting for input.
Use the read module to read input from the user as we did 
in Thursday's class. Add the following code to also start a timer 
the increments by 1 every second.

var secondCounter = 0;

setInterval(function () {
  secondCounter++;
}, 1000);

When the user finally types in their input, use secondCounter 
variable to report how long the program had been waiting for input.

Call this file twothingsatonce.js and add it to your working directory*/

 var read = require('read');

 function Contact (name, address, phone) {
 	this.name = name;
 	this.address = address;
 	this.phone = phone;
 	this.toString = function(){
 		console.log("Your name is " 
 			+ this.name + ". Your address is " 
 			+ this.address + ". Your phone number is " 
 			+ this.phone + ".");
 	}
 }

 var user1 = new Contact();
 var secondCounter = 0

setInterval(function () {
  secondCounter++;
}, 1000);

read({prompt: 'Type your name: '}, getName);

function getName (err, result) {
    console.log("Your first input is: " + result);
    user1.name = result;
    console.log("Program waited " + secondCounter + " second(s) for your name.");
    read({prompt: 'Type your address: '}, getAddress);
}

function getAddress (err, result) {
	console.log("Your second input is:  " + result);
    user1.address = result;
    console.log("Program waited " + secondCounter + " second(s) for your address.");
	read({prompt: 'Type your phone number: '}, getPhone);
}

function getPhone (err, result) {
	console.log("Your third input is: " + result);
    user1.phone = result;
    console.log("Program waited " + secondCounter + " second(s) for your phone number.");
    user1.toString();
    console.log("It took you " + secondCounter + " second(s) to input your contact info.");
process.exit();
}




