# displayLesson

a display lesson for bootstrap and nodejs, By Dongyueweb

## Bootstrap

中文主页：http://www.bootcss.com/
CDN: http://www.bootstrapcdn.com/
2013年8月bootstrap更新到3了！因为对于响应式的更多支持，所以建议大家都学习3，用过2的人也最好看下

* 起步
     * 参考：http://v3.bootcss.com/getting-started/
     * 任务：下载bootstrap3，了解包含了哪些文件，在local建立一个基本模板。剩下的可以先掠过
     * 下载：可以直接引用 http://tq5124.dongyueweb.com/lib/ 下的bootstrap，这是我建立的公共前端lib库
* 练习css排版
     * 参考：http://v3.bootcss.com/css/
     * 任务：主要是学习栅格系统，要自己写一遍。其他的部分可以看看就行了，知道bootstrap提供了些什么功能
* 了解组件 
     * 参考：http://v3.bootcss.com/components/
     * 任务：所有的内容都要看一遍，知道bootstrap提供了些什么，到时候用的时候回来查文档即可
     * 另：关于ico，自带的Glyphicons内容比较少，可以使用font-awsome，见http://fortawesome.github.io/Font-Awesome/
* 了解js插件
     * 参考：http://v3.bootcss.com/javascript/
     * 任务：还是都游览一遍，有个印象即可
* 其他bootstrap库
     * 参考：http://www.bootcss.com/ 下方的其他开源项目
     * 任务：了解每一个的功能，需要用的时候知道这里有这个功能。这里提供了很多实用的工具如html文本编辑器，时间日历等插件，兼容ie6方案等。
* 动手编写

以本项目为例，基本步骤见commit log

## Node.js

目标是帮助程序员构建高度可伸缩的应用程序，编写能够处理数万条同时连接到一个（只有一个）物理机的连接代码。

Node 解决这个问题的方法是：更改连接到服务器的方式。每个连接发射一个在Node引擎的进程中运行的事件，而不是为每个连接生成一个新的 OS 线程（并为其分配一些配套内存）。Node声称它绝不会死锁，因为它根本不允许使用锁，它不会直接阻塞I/O调用。Node还宣称，运行它的服务器能支持数万个并发连接。

### 安装

参考[官方指南](https://github.com/joyent/node/wiki/Installation )

### 实践

[helloworld 实践](http://www.nodebeginner.org/index-zh-cn.html)

### 总体思想

* **异步编程**
* 事件驱动，面向过程
