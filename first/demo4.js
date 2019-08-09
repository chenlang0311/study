Object.prototype.a ="a";
Function.prototype.a ="a1";
function Person(){};//Person.a =="a1"
var yideng = new Person();
console.log("p.a",typeof yideng,yideng,yideng.a); //a
console.log(1..b,1..a);//a  1..__proto__ Number Object 
console.log("666",12345 .a);//error 1.a会报错 1 .a 是a
console.log(yideng.__proto__.constructor.constructor.constructor);

// Object.prototype和Function.prototype打印的内容差距很大的原因是啥？
Function.prototype//ƒ () { [native code] }  由C实现的函数
Object.prototype //一个对象，含有constructor