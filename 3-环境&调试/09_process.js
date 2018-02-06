const { argv, argv0, execArgv, execPath } = process;
//命令参数，数组
argv.forEach(item => {
    console.log(item);
});
//argv第一个值的引用
console.log(argv0);
//文件前面的的参数
console.log(execArgv);
//脚本路径
console.log(execPath);

// 执行 node 09_process.js

// /usr/local/bin/node
// /Users/yaya/Desktop/project/learn/node-study/3-环境&调试/09_process.js
// node
// []
// /usr/local/bin/node


// 执行 node --inspect 09_process.js --test a=1 b=2
// Debugger listening on ws://127.0.0.1:9229/6faa3b3b-b25f-41a0-af8f-b974b7045d83
// For help see https://nodejs.org/en/docs/inspector
// /usr/local/bin/node
// /Users/yaya/Desktop/project/learn/node-study/3-环境&调试/09_process.js
// --test
// a=1
// b=2
// node
// [ '--inspect' ]
// /usr/local/bin/node
