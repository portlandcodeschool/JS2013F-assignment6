var read = require("read");

var name = "";
var address = "";
var phone = "";
var storage = [];

function Newcontact(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
}

Newcontact.prototype.toString = function () {
    var test = "This is " + this.name+ " user record here is their address and phone " + this.address + " " + this.phone;
    return test;
};

read({prompt: "What's your name?"}, getName);

function getName (err, result, isDefault) {
  if (result === "exit") {
    console.log("Thats all folks")
    process.exit()
  } else {

  console.log("Your name is: " + result);
  name = result;
  read({prompt: "What's your address?"}, getAddress);
  }
}

function getAddress (err, result, isDefault) {
  console.log("Your address is: " + result);
  address = result;
  read({prompt: "What's your phone number?"}, getPhone);
}

function getPhone (err, result, isDefault) {
  console.log("Your phone is: " + result);
  phone = result;
  var user = new Newcontact(name, address, phone);
  storeAndPrint(user);
}

function storeAndPrint (user) {
  console.log(user.toString());
  storage.push(user);
  console.log(storage);
  read({prompt: "What's your name?"}, getName);
}


           