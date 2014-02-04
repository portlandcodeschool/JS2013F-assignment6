var read = require('read');
var name;
var addrs;
var tel;

function Details(name, addrs, tel) {
  this.name = name;
  this.addrs = addrs;
  this.tel = tel;
}

Details.prototype.toString = function() {
  return this.name + " " + this.addrs + " " + this.tel;
}

read({ prompt: "What's your name?" }, getName);

function getName(err, result) {
  name = result;

  read({prompt: "What's your address?"}, getAddrs);
}

function getAddrs(err, result) {
  addrs = result;

  read({prompt: "What's your phone number?"}, getTel);
}

function getTel(err, result) {
  tel = result;
  console.log("Thanks");
  
  var theDetails = new Details(name, addrs, tel);
  console.log(theDetails.toString());

  read({ prompt: "Continue?" }, getContinue);
}

function getContinue(err, result) {
  if (result === "exit") {
    process.exit();
  } else {
    read({ prompt: "What's your name?" }, getName);
  }
}