//循环里的匿名函数的取值问题

/*  
function box(){
    arr = [];                        //创建了一个数组

    for(var i = 0; i < 5; i++){
        arr[i]=function(){         //匿名函数及时驻留i变量
            return i;
        };                    
    }

    return arr;                     //返回数组[0,1,2,3,4]
}

var b = box();                      //把box函数赋值给b

for( var i = 0; i < 5; i ++){
    console.log(b[i]());            //55555
}

//改0;
function box(){
    arr = [];                        //创建了一个数组

    for(var i = 0; i < 5; i++){
        arr[i]=(function(){         //通过自我执行匿名函数及时驻留i变量
            return i;
        })();                    
    }

    return arr;                     //返回数组[0,1,2,3,4]
}

var b = box();                      //把box函数赋值给b

for( var i = 0; i < 5; i ++){
    console.log(b[i]);            //55555
}

//改1;
function box(){
    arr = [];                        //创建了一个数组

    for(var i = 0; i < 5; i++){
        arr[i]=(function(num){         //匿名函数及时驻留i变量
            return num;
        })(i);                    
    }

    return arr;                     //返回数组[0,1,2,3,4]
}

var b = box();                      //把box函数赋值给b

for( var i = 0; i < 5; i ++){
    console.log(b[i]);            //55555
}

//改2;
function box(){
    arr = [];                        //创建了一个数组

    for(var i = 0; i < 5; i++){
        arr[i]=function(num){         //匿名函数及时驻留i变量
            return function(){
                return num;
            };
        }(i);                    
    }

    return arr;                     //返回数组[0,1,2,3,4]
}

var b = box();                      //把box函数赋值给b

for( var i = 0; i < 5; i ++){
    console.log(b[i]());            //55555
}

*/


//闭包里面的this不属于对象不属于函数
var user = 'this window';

var box = {
    user:'this box',
    getUser:function(){
        return function(){
            return this.user;           //undefined;
        };
    }
};

//若像闭包里面的this指向外层对象
//1、对象冒充方法
console.log(box.getUser().call(box));

//2、让作用域大的this赋值给闭包内的this
var box = {
    user:'this box',
    getUser:function(){
        //这里的this指向box;
        var that = this;
        return function(){
            //这里的this为undefined;
            return that.user;           //undefined;
        };
    }
};

console.log(box.getUser()());



