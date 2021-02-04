/*  
//优先级别：box.name [实例属性] > this.name [构造属性] > Box.prototype.name [原型属性] 执行顺序也是按这个，往下查找值。

    //判断只有该属性只出现在原型里面：
    function isPrototype(object,property){
        return !object.hasOwnProperty(property) && (property in object);
    }
    console.log(isPrototype(box1,'name'));

    //使用字面量创建原型对象
    function Box(){};

    //因为Box.prototype = {};相当于创建了一个对象，所以实例对象.constructor指向的是一个Object而不是Box本身
    Box.prototype = {
        name: 'kkk',
        age:100,
        //constructor:Box,       //避免出错，解决方法：强制添加属性：constructor：Box;
        run:function(){
            return this.name + this.age + "运行中";
        }
    };

    //重写原型属性,不会保留原来的原型对象和构造函数对象所有属性和方法都代替切断了。
    Box.prototype = {
        name:'aaa',
        age:21,
        run:function(){
            return this.name + this.age + "运行中";
        }
    };

    //判断基本包装类里有没有对应方法，有则输出方法名，没有则输出undefined
    console.log(Array.prototype.sort);
    console.log(String.prototype.addstring);

    //自定义一个字符串添加方法并调用
    String.prototype.addstring = function(){
        return this + '添加了';
    };
    var box = 'lee';
    console.log(box.addstring());

*/



