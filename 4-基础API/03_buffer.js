console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5, 1));
console.log(Buffer.allocUnsafe(5, 1));
// <Buffer 00 00 00 00 00 00 00 00 00 00>
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// <Buffer 01 01 01 01 01>
// <Buffer a1 4c 98 32 c6>

console.log(Buffer.from([1, 2, 3]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test', 'base64'));
// <Buffer 01 02 03>
// <Buffer 74 65 73 74>
// <Buffer b5 eb 2d>

console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));
// 4
// 6

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));
// false
// true

const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('a ');
const buf4 = Buffer.from('test ');
const buf5 = Buffer.from('!');

const buf = Buffer.concat([buf1, buf2, buf3, buf4, buf5]);
console.log(buf.toString());
// This is a test !

const buff = Buffer.from('This is a test!');
console.log(buff.length);
console.log(buff.toString());
console.log(buff.toString('base64'));
// 15
// This is a test!
// VGhpcyBpcyBhIHRlc3Qh

const buff1 = Buffer.alloc(10);
buff1[0] = 2;
console.log(buff1.length);
// 10

const buff2 = Buffer.allocUnsafe(10);
buff2[0] = 2;
console.log(buff2.length);
// 10

const buff3 = Buffer.allocUnsafe(10);
console.log(buff3);
console.log(buff3.fill(10, 2, 5));
// <Buffer 00 00 00 00 00 00 00 00 00 00>
// <Buffer 00 00 0a 0a 0a 00 00 00 00 00>

const buff4 = Buffer.from('test');
const buff5 = Buffer.from('test');
const buff6 = Buffer.from('test!');
console.log(buff4.equals(buff5));
console.log(buff4.equals(buff6));
// true
// false


console.log(buff4.indexOf('es'));
console.log(buff4.indexOf('esa'));
// 1
// -1


//解决中文乱码
const buff7 = Buffer.from('中文字符串！');
for (let i = 1; i < buff7.length; i += 5) {
    const b = Buffer.allocUnsafe(5);
    buff7.copy(b, 0, i);
    console.log(b.toString());
}
// ��文
// 字�
// �串�
// ��

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
for (let i = 1; i < buff7.length; i += 5) {
    const b = Buffer.allocUnsafe(5);
    buff7.copy(b, 0, i);
    console.log(decoder.write(b));
}
// ��文
// 字
// 符串
// ！�
















