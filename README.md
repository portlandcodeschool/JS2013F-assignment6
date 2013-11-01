# Assignment 6

If you haven't already, you need to clone this repo and create a new working branch for yourself.

1. git clone git@github.com:portlandcodeschool/JS2013F-assignment5.git
2. cd JS2013F-assignment5
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

In this assignment you're going to write an asynchronous loop. Use the read module to repeatly prompt the user for input. Break the loop (and exit the program) when the user types 'exit'. Remember to use ```process.exit()`` to instruct your node program to terminate.

Call this file daloop.js and add it to your working directory

## Intermediate Assignment

TBA