const EventEmitter = require('events');

//定义类，继承功能
class CustomEvent extends EventEmitter {}

//实例化
const ce = new CustomEvent();


// //1-绑定事件
// ce.on('test', () => {
//     console.log('this is a test!');
// });

// //触发事件
// setInterval(() => {
//     ce.emit('test')
// }, 500);

// // 2-定义错误事件
// ce.on('error', (err, time) => {
//     console.log(err);
//     console.log(time);
// });
// ce.emit('error', new Error('opps!'), Date.now());


// //3-执行一次
// ce.once('test', () => {
//     console.log('test event');
// });
// setInterval(() => {
//     ce.emit('test')
// }, 500);

//定时移除事件
function fn1() {
    console.log('fn1');
}

function fn2() {
    console.log('fn2');
}
ce.on('test', fn1);
ce.on('test', fn2);
setInterval(() => {
    ce.emit('test')
}, 500);

setTimeout(() => {
    // ce.removeListener('test', fn2); //移除特定事件
    ce.removeAllListeners('test');//移除全部事件
}, 1500);






