/* 
    原型的缺点：无独立数据、不可传参
    原型的优点：共享 

    function Box(){};

    Box.prototype = {
        name:'kkk',
        age:18,
        constructor:Box,
        family:['父亲','母亲','姐姐','弟弟'],
        run:function(){
            return this.name + this.age + '运行中';
        }
    };

    var box1 = new Box();
        console.log(box1.family);     //['父亲','母亲','姐姐','弟弟']
        box1.family.push('哥哥');
        console.log(box1.family);     //['父亲','母亲','姐姐','弟弟','哥哥']

    var box2 = new Box();
        console.log(box2.family);     //['父亲','母亲','姐姐','弟弟','哥哥']
*/

/*
//解决传参和独立数据问题，采用组合构造函数+原型模式
    function Box(name,age,family){     //独立数据
        this.name = name;
        this.age = age;
        this.family = family;
    }

    Box.prototype = {                  //共享数据
        constructor:Box,
        run:function(){
            return this.name + this.age + this.family +'运行中';
        }
    };

    var box1 = new Box('kkk',18,['father','mother','sister','brother']);
        box1.family.push(123);

    var box2 = new Box();
        box2.name = 'aaa';
        box2.age = 20;
        box2.family = ['father','mother','sister','brother'];

console.log(box1.constructor);
console.log(box1.run());

console.log(box2.constructor);
console.log(box2.run());

    //动态原型模式【具有封装性】
    function Box(name,age){
        this.name = name;
        this.age = age;

        if(typeof this.run != 'function'){      //判断this.run是否已经是一个函数
            console.log('原型初始化开始');
            Box.prototype.run = function(){
                return this.name + this.age + '运行中';
            };
            console.log('原型初始化结束');
        }
    }

    //重写原型时不可以使用字面量，会破坏新原型和实例的连接

//原型初始化一次就会把属性或者方法创建出来，无需要在每次实例化一个对象时初始化一次，否则会浪费资源
var box1 = new Box('lee',100);
console.log(box1.run());

var box2 = new Box('lee',200);
console.log(box2.run());

*/


/* 
//寄生构造函数 【构造+工厂模式】]
function Mystring(string){
    var str = new String(string);
    str.addstring = function(){
        return this + "添加了";     //这里的this指str
    };
    return str;
}

var box1 = new Mystring('lee');
console.log(box1.addstring());

var box2 = new Mystring('kkk');
console.log(box2.addstring());

console.log(box1 instanceof Object);        //true
console.log(box2 instanceof myString);      //false


//稳妥构造函数 【解决函数内部不可使用this,创建对象不能用new】
function Box(name,age){
    var obj =new Object();
    obj.run = function(){
        return name + age + '运作中';
    };
    return obj;
}

var box = Box('lee',18);
console.log(box.run());
console.log(box instanceof Box);     //false
 */
