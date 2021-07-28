const args = process.argv.slice(2);

// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// if (args)
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

const timer = function(array) {
  let time = 1000;
  for (const element of array) {
    if (element >= 0) {
      setTimeout(() => {
        process.stdout.write('beep! ');
        process.stdout.write('\x07');
      }, time * element);
    }
  }
};
timer(args);

// find max value in the array
// use Max from prev activities
// when the value is used in the loop, add \n