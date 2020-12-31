//使用面向对象的构造函数模式 【不仅可以实现多个类似对象的重复使用，还能能识别对象的具体类型】
function Box(name,age){                              
    this.name = name;                               //创建Box属性
    this.age = age;
    this.run = function(){                          //创建Box的run方法
        return this.name + this.age + "运行中。。";
    };
} 

function Desk(name,width){                              
    this.name = name;                               //创建Desk属性
    this.width = width;
    this.build = function(){                           //创建Desk的build方法
        return this.name + this.width + "运行中。。";
    };
} 

/* 
对比工厂模式：
    1.对比于工厂模式，不需要new Object(),系统会自动创建 var obj = new Object()。
    2.直接使用this代替obj来创建属性、对象等。
    3.不需要返回obj,系统会自动返回。
*/

/* 
构造函数模式使用规则：
    1.构造函数也是函数，并且命名第一个字母一定要大写，不会出错但是要规范。
    2.不需要使用new运算符来创建实例对象，而工厂模式是不需要的。
    3.也可以使用对象冒充方法来调用
*/


var box1 = new Box("lee",100);                     //创建Box第一个对象
var box2 = new Box("jack",200);                    //创建Box第二个对象
var box3 = new Desk("kkk",500);                    //创建Desk第一个对象

var o_Desk = new Object();                         //使用对象冒充方法创建一个Desk的对象
Desk.call(o_Desk,"sweet",20);


alert(box1.run());           //lee100运行中。。     //用实例对象box1调用构造函数Box的run方法
alert(box2.run());           //jack200运行中。。    //用实例对象box2调用构造函数Box的run方法
alert(box3.build());         //kkk500运行中。。     //用实例对象box3调用构造函数Desk的do方法
alert(o_Desk.build());       //sweet20运行中。。    //用冒充对象调用Desk的build方法

/* 可以通过这个方法判断实例对象属于哪一个构造函数从而判断类型 */
/* alert(box1 instanceof Object);    //true  
alert(box1 instanceof Box);       //true              
console.log(1);
alert(box2 instanceof Desk);      //false
console.log(2);
alert(box3 instanceof Box);       //false
console.log(3); 
*/


console.log(box1 == box2);   //这里比较的是值和地址，false
/* 
    这里可以说明创建的实例对象是引用类型的，即使是用同一个构造函数实例化创建出来的，所指向的地址都是不一样的
    区别就在于函数体内   如果是属性则属于基本类型,只可比较值,无可比较地址。只要值相等就返回true
                       如果是方法则属于引用类型,即可比较值,也可比较地址。值和地址相等才返回true
*/


alert(typeof box1.run());           //string        //有括号就代表着返回方法里面的值
alert(typeof box1.run);             //function      //没有括号就代表着返回方法的位置，更深一层就是堆内存里面的地址

console.log(box1.run() === box2.run());  //值都是lee100运行中。。所以是true                      
console.log(box1.run == box2.run);      //即使值一样，但对应堆内存里面的地址不一样，所以是false      