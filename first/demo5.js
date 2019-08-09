//ES6元编程=>对JS进行编程（对编程语言进行编程）
//1. Symbol.toPrimitive
let obj ={
    [Symbol.toPrimitive](hint){
        console.log(hint);
        switch(hint){
            case "number":
                return 123;
            case "string":
                return "str";
            case "default":
                return "default";
        }
    }
}
console.log(3*obj) //369
console.log(3+obj) //3default
console.log(String(obj)) //str

let yideng = {
    [Symbol.toPrimitive]:((i)=> () => ++i)(0)
}
if(yideng ==1&&yideng==2&yideng==3){
    console.log("coming")
}

//2.tco 尾递归调用优化

// function test(i){
//     if(i==1)return;
//     return test(i--,i);
//     TCO_ENABLED = true;
// }
// test(5)


//3.proxy 代理

let person={
    age:30
}
const validator ={
    set(target,key,value){
        if(typeof value !="number" || Number.isNaN(value)){
            throw new Error("年龄必须是数字")
        }
    }
}
const proxy =new Proxy(person,validator);
proxy.age="Yideng"

//4.反射 Reflect  npm:reflect-metadata 浏览器不支持

Reflect.apply()