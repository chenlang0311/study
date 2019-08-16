//大规模NnodeJS项目架构优化

//几种常用的开发模式
/**
 * 1.纯的SPA  | => nginx => 接口
 *            | => node => 接口
 *  
 * 2.MPA+SPA 
 * 
 * 3.MPA +swig
 * 
 * 4.同构化
 */

 /**
  * node在前端中，一般用来做proxy做代理，然后用来提供API，控制路由
  * vue的同构化SSR FNP FCP
  * 处理API返回的json，数据格式化
  * Node pc iot 系统 跨端
  * 游戏的中间层(吞吐率更高)
  * Reaktor Hello World (美国宇航局发送卫星)
  * 
  */

  /**
   * 异步IO好处
   * 可以消除UI阻塞
   * M+N => Max(M,N)
   * IO是昂贵的，分布式IO是更加昂贵的
   * NodeJS适用于IO密集型(读写)的不适用于CPU密集型(计算)，因为计算需要进行多线程计算，异步IO不带数据直接返回，需要获取数据还需要通过文件描述符再次读取
   * 完美的异步IO是应该是应用程序发起非阻塞调用，无需通过遍历或者时间循环等方式轮询
   * EVENT LOOP => LIBUV(负责通知管理异步事件)
   * 
   */
  /**
   * 几个特殊的API
   * 1.settimeout和setinterval线程池不参与
   * 
   */

  setImmediate(()=>{
    console.log(2)
  })
  setTimeout(() => {
    console.log(1)
  }, 42);
  process.nextTick(()=>{
    console.log(3)
  })
  new Promise((resovle, reject)=>{
    console.log(4);
    resovle(4)
  }).then(res=>{
      console.log(5)
  })

  console.log(6)
 //4,6,3,5,1,2  
 //libuv不参与以下
 //同步> 异步 队列优先 > nextTick > Promise > setTimeout(时间小于43) > setImmediate 
 //高阶函数：可以将函数作为输入或者返回值，形成一种后续传递风格的结果接受方式(对传入的函数进行加工)，而非单一的返回值形式，
 //偏函数： 指定部分参数产生一个新的定制函数形式就是偏函数。Node中异步编程非常常见，我们通过哨兵变量(计数)会很容易造成业务的混乱。underscore,after变量(面向切面编程)
 //

 //常用的Node控制异步技术手段
 //1.Step,wind(提供等待的异步库)，Bigpipe,Q.js
 //2.Async,Await
 //3.Promise/Defferred 是一种先执行异步调用，延迟传递的处理技术，Promise是高级接口，事件是低级接口。低级接口可以构建更多复杂的场景,高级接口一旦定义，不太容易变化，不再有低级接口的灵活性，但对于解决问题非常有效。
 //4.由于Node基于V8的原因，目前还不支持协程，协程不是进程或线程，其执行过程更类似于子例程，或者说不带返回值的函数调用。
 //一个程序可以包含多个协程，可以对比与一个进程包含多个线程，因而下面我们来比较协程和线程。我们知道多个线程相对独立，有自己的上下文，切换受系统控制，而协程也相对独立，有自己的上下文，但是其切换由自己控制，由当前协程切换到其他协程由当前协程来控制。


 /**
  * 内存管理与优化
  * 查询内存使用==> process.memoryUsage() =>rss(所有内存使用包括堆区和栈区),heapTotal(堆区占用的内存),heapUsed(已使用到的堆部分),external(V8引擎C++对象占用（GC动态变化）) =>参考http://nodejs.cn/api/process.html#process_process_memoryusage
  * V8垃圾回收策略主要基于分代式垃圾回收机制，新生代(为存活时间较短对象)和老生代(存活时间较长的对象)。就像小孩子尽管玩，到处丢东西大人收。
  * scavenge算法管理新生代内存（1:26分），一个典型的空间换时间的算法，5次？阀值:25%;广度优先，引用计数=0开始GC
  * mark-sweep和mark-compact管理老生代内存,间歇性回收
  * 
  * 
  */
 /**
  * 常见的内存泄漏问题
  * 1.无限制增长的数组
  * 2.无限制设置属性和值
  * 3.任何模块内的私有变量和方法均是永驻内存的 a=null，闭包
  * 4.大循环 无GC机会
  */

  /**
   * 大规模node站点结构原理分析
   * 多线程
   * Master,PM2,多线程，在本机启动负载均衡；
   * 在网络层的负载均衡用nginxs，keepalive，heartbeat心跳检测，varnish => servers;stupid=>server
   */