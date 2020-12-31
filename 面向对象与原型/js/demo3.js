/* 
//构造方法模式的使用
function Box(name,age){
    this.name = name;                                    //实例属性
    this.age = age;
    this.run = function (){                              //实例方法
        return this.name + this.age + "运行中。。。";
    };
} 
*/

//使用原型模式prototype 【可以实现属性和方法的共享】
/* 
    原型的工作思路是 首先查找构造方法是否有实例属性和实例方法，如果有则按构造函数的处理方法来处理
                   如果没有就会查找是否有原型属性和原型方法，如果有则按原型对象的处理方法来处理
*/
function Box(name,age){
}

Box.prototype.name = "lee";                             //原型属性
Box.prototype.age = 100;                                
Box.prototype.run = function (){                        //原型方法
    return this.name + this.age + "运行中。。。";
};

var box1 = new Box();
var box2 = new Box();

console.log(box1.name);
console.log(box1.run());

console.log(box1.run);                                  //box1.run和box2.run对应的地址和位置都是一样的，形成了共享的效果
console.log(box2.run);                        
console.log(box1.run == box2.run);                      //true

//alert(box1.prototype);                                  //这是一个对象，在浏览器是不支持找到的
//alert(box1.__proto__);                                  //这是一个指针指向prototype原型对象，ie浏览器不支持
//alert(box1.constructor);                                //构造属性，可以获取对应原型的函数

//判断一个对象实例（对象引用）是不是指向了原型对象。基本上，只要实例化了，就会自动指向
console.log("判断实例对象是否指向原型对象"+" "+Box.prototype.isPrototypeOf(box1));         //true

//判断实例中是否存在指定属性（也就是构造函数或者box1.name='kk' 里面找，原型的不算）
console.log("判断实例中是否存在指定name属性（也就是构造函数或者box1.name='kk'创建的都包括)"+" "+box1.hasOwnProperty('name'));                     //true

//判断box1里面是否存在name的属性无论是构造函数里面还是box1.name='kk'还是原型，只要可以找到就是true
console.log("判断name属性是否存在实例或者box1.name='kk'或者原型中"+" "+('name' in box1));  //true

// //判断是否只有原型中有属性
function isPrototype(object,property){
    return !object.hasOwnProperty(property) && (property in object);        //思路就是 确定构造函数里面和外部定义没有并且只出现在原型中
}

console.log("判断是否只有原型中有name属性"+" "+isPrototype(box1,'name'));