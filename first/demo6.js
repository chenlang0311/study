let a = 0;
let yideng = async () => {
    a = a + await 10; //a=0
    console.log("await",a) //10
}
yideng();
console.log("out",++a) //1
console.log("out",a++) //1
console.log("out",++a) //3

/**
 * babel 实现编译async
 */
while(true){
    switch (jj){
        case "end":
            throw Error()//退出循环
    }
   
}


/**
 * 同步执行栈，异步执行队列（晚于同步队列，click,ajax,async）
 * concurrent.thread.js 一个古老的可以开启js多线程的库
 * http-server 可以本地启服务
 */
const worker  = new Worker("task.js") //work会跨域
worker.onmessage =function(event){
    console.log(event.data)
}