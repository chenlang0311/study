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
  setTimeout(() => {
    console.log(1)
  }, 0);
  setImmediate(()=>{
    console.log(2)
  })

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
//6.45123
 //4,6,3,5,1,2
 