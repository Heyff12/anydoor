const fs=require('fs');

const result=fs.readFile('./06_fs.js',(err,data)=>{
	if(err){
		console.log(err);
		return false;
	}
	console.log(data.toString());
});

console.log(result);