//下个队列的对首
setImmediate(()=>{
	console.log('setImmediate');
});

setTimeout(()=>{
	console.log('setTimeout');
},0);

//当前队列的对尾，下个队列执行
process.nextTick(()=>{
	console.log('nextTick1');
	process.nextTick(()=>{
		console.log('nextTick2');
	});
});

// nextTick1
// nextTick2
// setTimeout
// setImmediate