# 3-1 环境 & 调试 ——CommonJS1  
## node --inspect-brk 01_run.js,通过谷歌chrome://inspect/#devices查看编译文件  

# 3-2 环境 & 调试 ——CommonJS2  
## module被加载的时候执行，加载后缓存  
## 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出  

# 6-2 静态资源服务器  
## supervisor 1_http.js,可以监听变化  

## 安装  
```
npm i -g anydoor
```

## 使用方法  
```
anydoor # 把当前文件夹作为静态资源服务跟目录
anydoor -p 8080 # 设置端口号 8080
anydoor -h localhost # 设置host为localhost
anydoor -d /usr # 设置根目录/usr
```

## 安装  
```
npm i -g anydoor
```
















