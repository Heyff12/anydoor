const fs = require('fs');



fs.readFile('./02_cusmod.js', (err, data) => {
    if (err) throw err;
    console.log(data);
});


fs.readFile('./02_cusmod.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


//同步先执行
const data = fs.readFileSync('./02_path.js', 'utf8');
console.log(data);

// const path = require('path');
// const mod = require('./02_cusmod');
// console.log(mod.testVar);
// console.log('__dirname    ', __dirname);//文件的绝对路径
// console.log('process.cwd()', process.cwd());//node执行命令所在文件夹
// console.log('./           ', path.resolve('./'));


// // this is a moudule
// // 100
// // __dirname     /Users/yaya/Desktop/project/learn/node-study/4-基础API
// // process.cwd() /Users/yaya/Desktop/project/learn/node-study/4-基础API
// // ./            /Users/yaya/Desktop/project/learn/node-study/4-基础API

// // 操作---cd ..
// // this is a moudule
// // 100
// // __dirname     /Users/yaya/Desktop/project/learn/node-study/4-基础API
// // process.cwd() /Users/yaya/Desktop/project/learn/node-study
// // ./            /Users/yaya/Desktop/project/learn/node-study
// console.log('this is a moudule');

// const testVar = 100;

// function test() {
//     console.log(testVar);
// }

// module.exports.testVar = testVar;
// module.exports.testFn = test;
// <Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 27 74 68 69 73 20 69 73 20 61 20 6d 6f 75 64 75 6c 65 27 29 3b 0a 0a 63 6f 6e 73 74 20 74 65 73 74 56 61 72 20 3d ... >



fs.writeFile('text', 'this is a test', { encoding: 'utf8' }, err => {
    if (err) throw err;
    console.log('done');
});
// done
const content = Buffer.from('this is a test');
fs.writeFile('text1', content, err => {
    if (err) throw err;
    console.log('done');
});