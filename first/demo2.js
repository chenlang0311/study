/**
 * step1
 */
function fn (){//this指向window,widnow.length==0,如果用到严格模式，this不指向window
    // "use strict"; 在这里才生效
    console.log(this.length)
}
var yideng ={
    length:5,
    method: function(){
        "use strict";
        fn();//->
        arguments[0]() //2
    }
}
const result  =yideng.method.bind(null);//this 指向null，依旧指向window，软绑定，占位，如果传一个{},this就指向这个对象
result(fn,1);

/**
 * step2
 */
//形参是三个 ，实际的参数是五个
function yideng2(a,b,c){
    console.log(this.length); //4
    console.log(this.callee.length);  // 1 ==>fn2(d) 的形参
}

function fn2(d){ //形参一个 函数的长度就是形参的长度
    // yideng2 => this => arguments => fn2
    // this.callee =fn2 
    arguments[0](10,20,30,40,50)
}
//实际的参数 4个
fn2(yideng2,10,20,30)
