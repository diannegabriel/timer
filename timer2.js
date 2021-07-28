const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  
  // The user can press b and it should beep right away
  if (key === 'b') {
    process.stdout.write('beep! ');
    process.stdout.write('\x07');
  }
  
  /*
  The user can input any number from 1 to 9 and it should
  immediately output "setting timer for x seconds...", and
  beep after that number of seconds has passed
  */
  if ((key >= 1) && (key <= 9)) {
    process.stdout.write(`setting timer for ${key} seconds... \n`);
    setTimeout(() => {
      process.stdout.write('beep! ')
      process.stdout.write('\x07');
    }, key * 1000);
  }

  // The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
  if (key === '\u0003') {
    process.stdout.write(`\nThanks for using me! Bye :)\n`);
    process.exit();
  }
});