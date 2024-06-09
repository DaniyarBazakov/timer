const args = process.argv.slice(2);

const newArray = args.map(Number);

newArray.sort((a, b) => a - b);

for( i = 0; i < newArray.length; i++) {
  if (newArray[i] < 0 || isNaN(newArray[i])) {
    newArray.splice(i, 1);
    i--;
  }
}

const Alarm = (arr) => {
  if( arr.length === 0) {
    process.exit(0);
  }
  arr.forEach(i => {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, i * 1000);
  });
};

Alarm(newArray);