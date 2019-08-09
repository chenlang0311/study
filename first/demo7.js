/**
 * 手写promise
 * 手写bind
 * 手写深拷贝
 */

 function Promise(fn){
    var callback;
    this.then = function (done){
        callback =done;
    }
    function resolve(){
        setTimeout(() => {
            callback()
        }, 0);
       
    }
    fn(resolve);
 }


 new  Promise(function(resolve,reject){
    resolve(1)
 }).then(res=>{
     console.log(res)
 })