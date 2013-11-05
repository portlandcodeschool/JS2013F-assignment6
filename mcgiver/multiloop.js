var read = require("read");

var name = "";
var address = "";
var phone = "";
var storage = [];
var counter = 0

function Newcontact(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
}

Newcontact.prototype.toString = function () {
    var test = "This is " + this.name+ " user record here is their address and phone " + this.address + " " + this.phone;
    return test;
};

  function getLoop (err, result, silent) {
    if ((result === "exit") || (result === "no")){
      console.log(storage);
      console.log("Thats all folks");
      process.exit();
    } else {
      counter = 0 
      read({prompt: "What's your name?"}, getName);
    }
  }

  function getName (err, result, silent) {
    if (counter == 2 ) {
      read({prompt: "Do you want to get on this ferris wheel?"}, getLoop);
    } else {
      console.log("Your name is: " + result);
      name = result;
      read({prompt: "What's your address?"}, getAddress);
    }
  }

  function getAddress (err, result, silent) {
    console.log("Your address is: " + result);
    address = result;
    read({prompt: "What's your phone number?"}, getPhone);
  }

  function getPhone (err, result, silent) {
    console.log("Your phone is: " + result);
    phone = result;
    var user = new Newcontact(name, address, phone);
    counter++
    console.log(user.toString());
    storage.push(user);
    read({prompt: "What's your name?"}, getName);
  }

read({prompt: "Do you want to get on this ferris wheel?"}, getLoop);


           