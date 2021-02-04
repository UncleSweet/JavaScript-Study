//普通函数
var box = function(){
    return 'lee';
};

//匿名函数使用闭包
function add(){
    var age=10;
    return function(){      //创建匿名函数
        age++;
        return age;
    };                      //调用此函数即可，解决全局变量的危险性
}

var Add = add();            //return function(){}
console.log(Add());         //age++ return age
console.log(Add());         //age++ return age
console.log(Add());         //age++ return age

Add = null;                 //解除引用，等待垃圾回收，释放资源

console.log(Add());         //Add is not a function

/* 匿名函数 */
(function (){
    return 'aaa';
})();

/* 闭包：就是匿名函数里面的匿名函数 */
(function(){
    return function(){
        return 'lll';
    };
})();




