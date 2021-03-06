const { appendFile } = require('fs');

const newContent = '\nThis is some more new text';

// asynchronous
/* writeFile('hi.txt', newContent, { flag: 'a' }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('content written!');
}); */

// synchronous
/* try {
  writeFileSync('hi.txt', newContent);
  console.log('content written!');
} catch (err) {
  console.error(err);
} */

appendFile('hi.txt', newContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content written!');
});
