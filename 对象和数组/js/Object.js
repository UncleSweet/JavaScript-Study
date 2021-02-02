/* 对象的创建和使用 */

/* 1、new运算符也可不用new运算符 */
var box = new Object();
// var box = Object();
box.name = '谢家铖';
box.age = 21;
box.run = function(){
    return box.name + "今年" + box.age + "了";
};

//输出方式 
console.log(box['name']);
console.log(box.age);
console.log(box.run());


/* 2、字面量方法创建对象 */
var box = {
    name:'谢家铖',
    age:21,
    run:function(){
        return '运行中';
    }
};
/* 
var box = {};
box.name = '谢家铖';
box.age = 21; 
*/
console.log(box.name + "今年" + box.age + "了" + box.run());


/* 3、使用delete删除对象属性，返回undefind */
//delete box.name;

//实现一个简单输出功能 
function Box(obj){
    if(obj.name != undefined)console.log(obj.name);
    if(obj.age != undefined)console.log(obj['age']);
}

//调用构造函数
Box({
    name:'谢家铖',
    age:21
});




