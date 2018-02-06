// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const http = require('http');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
  const url = req.url;
  const filePath = path.join(conf.root, url);
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`${filePath} is not a directory or file`);
      return;
    }
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`${filePath} is not a directory or file`);
      // fs.readFile(filePath, (err, data) => {
      //   res.end(data);
      // });
      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(files.join(','));
      });
    }

  });
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');
  // // res.write('<html>');
  // // res.write('<body>');
  // // res.write('Hello World hhhahahah\n');
  // // res.write('</body>');
  // // res.end('</html>');
  // res.end(filePath);
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}/`;
  console.log(`Server running at ${chalk.green(addr)}`);
});
