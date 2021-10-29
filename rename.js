const { rename } = require('fs');

rename('hi.txt', 'hello.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File renamed!');
});
