/**
 * JS模拟指针移动
 */
var s = [];
var arr = s;
for(var i = 0; i < 3; i++){
    var pusher = {
        value: "item" + i,
    },tmp;
    if(i !==2){
        tmp =[];
        pusher.children = tmp;//指向children
    }
    arr.push(pusher);
    arr = tmp;//引子
}
console.log(s[0])