const fs = require('fs');

// //读取文件信息
// fs.stat('./06_fs.js', (err, stats) => {
//     if (err) throw err;
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats);
// });
// true
// false
// Stats {
//   dev: 16777220,
//   mode: 33188,
//   nlink: 1,
//   uid: 501,
//   gid: 20,
//   rdev: 0,
//   blksize: 4096,
//   ino: 45169604,
//   size: 189,
//   blocks: 8,
//   atimeMs: 1517890836000,
//   mtimeMs: 1517890821000,
//   ctimeMs: 1517890821000,
//   birthtimeMs: 1517890684000,
//   atime: 2018-02-06T04:20:36.000Z,
//   mtime: 2018-02-06T04:20:21.000Z,
//   ctime: 2018-02-06T04:20:21.000Z,
//   birthtime: 2018-02-06T04:18:04.000Z }


// //更改文件名字
// fs.rename('./text','test.txt', (err) => {
//     if (err) throw err;
//     console.log('done');
// });

// //删除文件
// fs.unlink('./test.txt', (err) => {
//     if (err) throw err;
//     console.log('done');
// });

// //读取文件夹下的所有文件名
// fs.readdir('../', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });
// [ '.DS_Store',
//   '3-环境&调试',
//   '4-基础API',
//   'node_modules',
//   'note3.md',
//   'package-lock.json',
//   'package.json' ]

// //创建文件夹
// fs.mkdir('test', err => {});


// //删除文件夹
// fs.rmdir('./test', err => {});



// 监听文件变化
fs.watch('./', { 
	recursive: true 
},(eventType,filename)=>{
	console.log(eventType);
	console.log(filename);
});






