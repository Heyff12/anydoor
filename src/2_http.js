const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
  const url = req.url;
  const filePath = path.join(conf.root, url);


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.write('<html>');
  // res.write('<body>');
  // res.write('Hello World hhhahahah\n');
  // res.write('</body>');
  // res.end('</html>');
  res.end(filePath);
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}/`;
  console.log(`Server running at ${chalk.green(addr)}`);
});
