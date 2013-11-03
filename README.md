# Assignment 6

If you haven't already, you need to clone this repo and create a new working branch for yourself.

1. git clone git@github.com:portlandcodeschool/JS2013F-assignment6.git
2. cd JS2013F-assignment6
3. git checkout -b &lt;your lastname&gt;
4. git mkdir &lt;your lastname&gt;
5. git cd &lt;your lastname&gt;

## Basic assignment - Time waits for no one

This assignment is meant to demonstrate that other things can be happening in the background while your program is waiting for input.

Use the ```read``` module to read input from the user as we did in Thursday's class. Add the following code to also start a timer the increments by 1 every second.

```js
var secondCounter = 0;

setInterval(function () {
  secondCounter++;
}, 1000);
```

When the user finally types in their input, use ```secondCounter``` variable to report how long the program had been waiting for input.

Call this file twothingsatonce.js and add it to your working directory

## Basic assignment #2 - Da loop

In this assignment you're going to write an asynchronous loop. Use the read module to repeatly prompt the user for input. Break the loop (and exit the program) when the user types 'exit'. Remember to use ```process.exit()``` to instruct your node program to terminate.

Call this file daloop.js and add it to your working directory

## Basic assignment #3 - Da (non-infinite) loop

Adapt the code from the previous assignment so that the loop runs a certain number of times. As the loop runs, push the results from each iteration into an array that's visible at top level scope. When the set number of iterations are complete console.log() out the contents of the array.

Call this file dafiniteloop.js and add it to your working directory

## Basic assignment #4 - Wheels within wheels

Now we're going to combine the second and third assignments. Write an asynchronous loop that runs a fixed number of times within an outer loop that runs forever (until the user types 'exit'). The inner loop should store its results with an array, as in assignment #3. The outer loop will console.log() the latest contents of the array, prompt the user and exit if the user types 'exit', and launch another iteration of the fixed iteration inner loop otherwise.

Call this file multiloop.js and add it to your working directory

## Intermediate Assignment

The code below implements and interactive prompt for viewing an address book saved to a data.json file. Your mission is to implement an add command that prompts the user for a contact's particular details and adds it to the `myBook` array, which will be saved to the filesystem when you type exit.

```javascript
var fs = require('fs');
var read = require('read');

var myBook = [];

var data = fs.readFileSync(__dirname + '/data.json', { encoding: 'utf8', flag: 'a+' });
if (data) {
    myBook = JSON.parse(data);
}

// Anything stored in myBook will persist between application runs.

read({ prompt: '> ' }, mainLoop);

function mainLoop (err, result) {
    switch (result) {
        case 'exit':
            saveMyData();
            console.log("See yah!");
            process.exit();
        case 'list':
            myBook.forEach(function (item) {
                console.log(item);
            });
            break;
        case 'add':
            // implement here!
            break;
        case 'busey':
            console.log("The ex-presidents are surfers");
            break;
        }

    read({ prompt: '> '}, mainLoop);
}

function saveMyData () {
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(myBook));
}
```