var read = require('read');
var name;
var addrs;
var tel;
var secondCounter = 0;

setInterval(function () {
  secondCounter++;
}, 1000);

function Details(name, addrs, tel) {
  this.name = name;
  this.addrs = addrs;
  this.tel = tel;
}

Details.prototype.toString = function() {
  return this.name + " " + this.addrs + " " + this.tel;

}

read({ prompt: "What's your name?" }, getName);

function getName (err, result) {
  name = result;

  read ({prompt: "What's your address?"}, getAddrs);
}

function getAddrs (err, result) {
  addrs = result;

  read ({prompt: "What's your phone number?"}, getTel);
}

function getTel (err, result) {
  tel = result;
  console.log("The input took " + secondCounter + " seconds.");
  console.log("Thanks");

  var theDetails = new Details(name, addrs, tel);

  console.log(theDetails.toString());
  process.exit()
}
