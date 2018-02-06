const { normalize } = require('path'); //过滤路径
console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));

// /usr/local/bin
// /usr/bin

const { join } = require('path'); //拼接路劲
console.log(join('/usr', 'local', 'bin/'));
console.log(join('/usr', '../local', 'bin/'));

// /usr/local/bin/
// /local/bin/

const { resolve } = require('path'); //相对路径 转换为 绝对路径
console.log(resolve('./'));
// /Users/yaya/Desktop/project/learn/node-study/4-基础API


const { basename, dirname, extname } = require('path'); //相对路径 转换为 绝对路径
const filePath = '/usr/local/bin/no.txt';
console.log(basename(filePath)); //文件名
console.log(dirname(filePath)); //文件夹
console.log(extname(filePath)); //拓展名

// no.txt
// /usr/local/bin
// .txt


const { parse, format } = require('path'); //相对路径 转换为 绝对路径
const filePath1 = '/usr/local/node_modules/n/package.js';
const ret = parse(filePath1);
console.log(ret); //解析
// { root: '/',
//   dir: '/usr/local/node_modules/n',
//   base: 'package.js',
//   ext: '.js',
//   name: 'package' }
console.log(format(ret)); //反解析--对象编程路径
// /usr/local/node_modules/n/package.js


const { sep, delimiter, win32, posix } = require('path'); //操作系统
console.log('sep:', sep); //路径
console.log('win sep:', win32.sep); //路径
console.log('path:', process.env.PATH);
console.log('delimiter:', delimiter);
console.log('win delimiter:', win32.delimiter);
// sep: /
// win sep: \
// path: /Users/yaya/desktop/mongodb/bin:/Library/Frameworks/Python.framework/Versions/3.6/bin:/Library/Frameworks/Python.framework/Versions/3.5/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/yaya/Documents/mongodb-osx-x86_64-3.4.2/bin
// delimiter: :
// win delimiter: ;





