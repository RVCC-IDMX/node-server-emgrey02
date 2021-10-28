const { readFile, readFileSync } = require('fs');

// asynchronous
readFile('hi.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// synchronous
try {
  const data = readFileSync('hi.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

console.log('log from outside');
