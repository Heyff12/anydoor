const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const conf = require('../config/defaultConfig');
const mime = require('../helper/mime');//文件类型
const compress = require('./compress');//压缩
const range = require('./range');

const tplPath = path.join(__dirname, '../template/dir.tpl');
// const source = fs.readFileSync(tplPath,'utf-8');
const source = fs.readFileSync(tplPath); //buffer 读取快
const template = Handlebars.compile(source.toString());

module.exports = async function(req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      const contentType = mime(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      let rs;
      const {code,start,end}=range(stats.size,req,res);
      if(code===200){
        rs = fs.createReadStream(filePath);
      }else{
        rs = fs.createReadStream(filePath,{start,end});
      }
      // 压缩
      // let rs = fs.createReadStream(filePath);
      if (filePath.match(conf.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
      // fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      const dir = path.relative(conf.root, filePath);
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map(file => {
          return {
            file,
            icon: mime(file)
          }
        })
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
