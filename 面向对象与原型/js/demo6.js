//ECMAScript不支持接口，只支持继承

//继承，通过原型链实现
/* 
function Box(){             //被继承 （父类、基类）
    this.name = 'lee';
    this.age = 100;

    if(typeof this.run != 'function'){
        console.log('初始化开始');
        Box.prototype.run = function(){
            return this.name + this.age + '运行中';
        };
        console.log('初始化结束');
    }
     
}

function Desk(){            //继承（子类、派生类）
    this.age = 200;
}

//原型链继承
Desk.prototype = new Box();      //继承Box构造函数和原型的所有方法和属性。也可在派生类重写基类的属性和方法

var desk1 = new Desk();
console.log(desk1.name);
console.log(desk1.run());        //lee200运作中

var desk2 = new Desk();
console.log(desk2.name);
console.log(desk2.run());        //lee200运作中 

*/

/* 
//对象冒充继承

function Box(name,age){
    this.name = name;
    this.age = age;
    this.family = 'kkk';
}

function Desk(name,age){
    Box.call(this,name,age);            //继承Box构造函数里面的方法和属性，原型不可继承
}

var desk1 = new Desk('lee',100);
console.log(desk1.name);
console.log(desk1.family); 
*/

/* 
//组合继承
//创建一个汽车基类构造方法
function All(car_name,car_age){
    this.car_name = car_name;
    this.car_age = car_age;
    this.car_driver = 'kkk';
}

//创建一个汽车基类原型
All.prototype.run = function(){
    return this.car_name + this.car_age + this.car_driver + '驾驶中';
};

//创建一个宝马类
function Bwm(car_name,car_age,car_driver){
    All.call(this,car_name,car_age);
    this.car_driver = car_driver;
}

//创建一个奔驰类
function Ben(car_name,car_age){
    All.call(this,car_name,car_age);
}

Bwm.prototype = new All();
Ben.prototype = new All();

var bwm = new Bwm('宝马',2,'aaa');
console.log(bwm.run());

var ben = new Ben('奔驰',3);
console.log(ben.run()); 
*/

//原型式继承 【原型链的封装写法】
function obj(o){
    function F(){};
    F.prototype = o;
    return new F();
}

var box = {                         //字面量对象 new Box();
    name: 'lee',
    arr: ['哥哥','姐姐','弟弟']      //引用类型共享了
};

box1.arr.push(123);


