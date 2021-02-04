/* 
// 简单创建一个对象
var box = new Object();
box.name1 = "lee";
box.age = 100;
box.run = function(){

    //这里的this指的是new Object()创建实例化时候的对象（也就是box）,是在作用域里面的可以用this来代替的
    return this.name1 + this.age + "运行中。。"; 
    
};

alert(box.run());  //lee100运行中。。  

var name = "kkk";
alert(this.name);   //kkk 这里的this是指window，所以直接指向的是window下面的全局变量
alert(this.name1);  //undefind name1只是box对象创建的属性，而不是window下的全局变量
*/


//使用面向对象的工厂模式【可以实现多个类似对象的重复使用，但不能识别对象的具体类型】
function createObject(name,age){
    var obj = new Object();                          //创建实例对象
    obj.name = name;                                 //创建对象属性
    obj.age = age;
    obj.run = function(){                            //创建对象方法
        return this.name + this.age + "运行中。。";
    };
    return obj;                                      //返回对象，如果没有这个放回对象操作则会出现创建的实例调用不了里面的属性和方法。从而出现报错。
}

var box1 = createObject("lee",100);                  //创建第一个实例化对象，并且传参数
var box2 = createObject("jack",200);                 //创建第二个实例化对象，并且传参数

console.log(box1.run());                                   //lee100运行中。。
console.log(box2.run());                                   //jack200运行中。。



