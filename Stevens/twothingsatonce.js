var read = require('read');
var secondCounter = 0;

read({ prompt: "What's going on?"}, function (err, result) {
  console.log("You typed: " + result);
  console.log(secondCounter);
});

  setInterval(function () {
  	secondCounter++;
  }, 1000);

