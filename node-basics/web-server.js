const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = './';
  switch (req.url) {
    case '/':
      path += 'node-basics/index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'node-basics/about.html';
      res.statusCode = 200;
      break;
    default:
      path += 'node-basics/404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
