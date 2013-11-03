var read = require('read');
var name;
var addrs;
var tel;
var contacts = [];

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
  contacts.push(theDetails);
  console.log(theDetails.toString());

  if (contacts.length === 3) {
    return onFinished();
  }

  read({ prompt: "Continue?" }, getContinue);
}

function getContinue(err, result) {
  if (result === "exit") {
    return onFinished();
  } else {
    read({ prompt: "What's your name?" }, getName);
  }
}

function onFinished(err, result) {
  console.log("Here are the contacts: " + contacts);
  process.exit();  
}