const fs = require('fs');

// const rs = fs.createReadStream('./07_stream.js');

// //输出--一边读一边输出
// rs.pipe(process.stdout);


// //写入
// const ws = fs.createWriteStream('./test.txt');

// const tid = setInterval(() => {
//     const num = parseInt(Math.random() * 10);
//     if (num < 7) {
//         ws.write(num.toString())
//     } else {
//         clearInterval(tid);
//         ws.end();
//     }
// }, 200);
// ws.on('finish', () => {
//     console.log('done!');
// });

//解决回调
const promisify = require('util').promisify;
const read = promisify(fs.readFile);


// read('./07_stream.js').then(data => {
//     console.log(data.toString());
// }).catch(ex => {
//     console.log(ex);
// });


async function test() {
    try {
        const content = await read('./07_stream.js');
        console.log(content.toString());
    } catch (ex) {
        console.log(ex);
    }
}
test();