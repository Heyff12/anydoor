const http = require('http');
const chalk = require('chalk');
const path = require('path');

const fs = require('fs');
const promisify = require('util').promisify;

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

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
      // 异步读取-缓慢--取消
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
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}/`;
  console.log(`Server running at ${chalk.green(addr)}`);
});
