/*第一讲F卷*/
/**
 * step1
 */
console.log(a) //undefined
// yideng() //error yideng is not a function
// console.log(typeof yideng(a)) //eroor yideng is not a function
var flag = true;
if(!flag){
    var a =1;
}
if(flag){ //if不存在作用域，函数才存在,词法作用域
    function yideng(a){
        yideng=a;
        console.log("yideng1");
    }
}else{
    function yideng(a){
        yideng=a;
        console.log("yideng2")
    }
}
// yideng() // yideng1  
/**
 * step2
 */
function yideng(){
    console.log("output");
}
function init (){//if不存在作用域，函数作用域,词法作用域,提升到函数的顶端
    var flag = true;
    if(flag){ 
        function yideng(a){
            yideng=a;
            console.log("yideng1");
        }
    }else{
        function yideng(a){
            yideng=a;
            console.log("yideng2")
        }
    }
    yideng()//yideng1
}
init()


/**
 * step3
 */
function test(){
    test =undefined 
}
console.log("step3.1",typeof test());//undefinded

//函数表达式，只读
var x = function test (){
    test =undefined
}
console.log("step3.2",typeof test()) //error test is not a function