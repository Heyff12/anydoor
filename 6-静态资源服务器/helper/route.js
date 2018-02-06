const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const conf = require('../config/defaultConfig');

const tplPath = path.join(__dirname, '../template/dir.tpl');
// const source = fs.readFileSync(tplPath,'utf-8');
const source = fs.readFileSync(tplPath); //buffer 读取快
const template = Handlebars.compile(source.toString());

module.exports = async function(req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      const dir = path.relative(conf.root, filePath);
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files
      };
      res.end(template(data));
    }
  } catch (ex) {
    console.error(ex);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a directory or file`);
  }
}


// fs.stat(filePath, (err, stats) => {
//   if (err) {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`${filePath} is not a directory or file`);
//     return;
//   }
//   if (stats.isFile()) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     // fs.readFile(filePath, (err, data) => {
//     //   res.end(data);
//     // });
//     fs.createReadStream(filePath).pipe(res);
//   } else if (stats.isDirectory()) {
//     fs.readdir(filePath, (err, files) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end(files.join(','));
//     });
//   }
// });
