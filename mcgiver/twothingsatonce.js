var read = require('read');

var secondCounter = 0;

read({prompt: 'What\'s your name?'}, function (err, result) {
  console.log('Your name is: '+ result, 'it took you '+ secondCounter + ' seconds to respond.');
  read({prompt: "What's your favirote color"}, getColor);
});

function getColor (err, result, isDefault) {
  console.log('Your color is: '+ result, 'it took you '+ secondCounter + ' seconds to respond.');
  process.exit();
}

setInterval(function() {
  secondCounter++;
}, 1000);