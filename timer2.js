const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const beep = () => {
  process.stdout.write("\x07");
};

const beepTimer = (seconds) => {
  console.log(`Setting timer for ${seconds} seconds...`);
  setTimeout(beep, seconds * 1000);
};

readline.on('line', (input) => {
  if (input === 'b') {
    beep();
  } else if (!isNaN(input) && parseInt(input) >= 1 && parseInt(input) <= 9) {
    beepTimer(parseInt(input));
  }
});

process.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!');
  readline.close();
  process.exit(0);
});