const path = require('path');
const mod = require('./02_cusmod');
console.log(mod.testVar);
console.log('__dirname    ', __dirname);//文件的绝对路径
console.log('process.cwd()', process.cwd());//node执行命令所在文件夹
console.log('./           ', path.resolve('./'));


// this is a moudule
// 100
// __dirname     /Users/yaya/Desktop/project/learn/node-study/4-基础API
// process.cwd() /Users/yaya/Desktop/project/learn/node-study/4-基础API
// ./            /Users/yaya/Desktop/project/learn/node-study/4-基础API

// 操作---cd ..
// this is a moudule
// 100
// __dirname     /Users/yaya/Desktop/project/learn/node-study/4-基础API
// process.cwd() /Users/yaya/Desktop/project/learn/node-study
// ./            /Users/yaya/Desktop/project/learn/node-study