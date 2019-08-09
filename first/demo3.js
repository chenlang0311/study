/**
 * step1
 */
function Yideng(name){
    this.name = name
}
let student1 = new Yideng();
let student2 = new Yideng();
student1=null;//GC回收 distance 跟节点的距离 闭包存在堆区中
setTimeout(() => {
    student2 =null;//不一定是3S后回收，但是会在下一次GC的时候回收
}, 3000);

/**
 * step2
 */
let YidengFactory =function(name){
    let student1 = new Yideng(name);
    return function(){
        console.log(student1)//闭包会缓存住student1变量，因为这里引用了student1
    }
}
let p1 = new YidengFactory("chenlang");
p1();
p1=null;//GC回收 闭包会缓存住student1变量
/**
 * step3
 * a 会被回收么
 */
function test(){
    var atest="yideng"
    console.log("test")
    return function(){
        debugger;
        eval("") //不会回收a，eval 怕你用A 
        //1.eval 不对lexical environment（词法 环境） 任何的变量进行解除绑定
        //可以用window.eval()来解决
    }
}
test()()

/**
 * step4
 */
//2.with 不会 浏览器一旦遇到with 放弃所有变量的回收
var obj ={};
with(obj){
    a=1;
}
console.log("step4",obj.a,a)// undefinded 1\
//3.如果调用了Function 也不会回收
var a =20;
function init (){
    var a =30;
    new Function("console.log(a)")// 20
}

//4.try--catch 欺骗了词法作用域 catch---e 延长了作用域链




