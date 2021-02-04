//块级作用域（私有作用域）
/*
function box1(){
    for(var i=0;i<5;i++){       //块级作用域（JS没这个东西）

    }
    var i;                      //5 重新定义还是可以访问到，不安全
    console.log(i);
}

box1();

//使用块级作用域（私有作用域）

function box2(){
    (function(){
        for(var i=0;i<5;i++){       //块级作用域（JS没这个东西）
            console.log(i);
        }
    })();
    
    var i;                      //出了匿名作用域i就自动销毁了
    console.log(i);
}

box2();

*/

(function(){
    var user = '';
    Box = function(value){
        user = value;
    };

    Box.prototype.getUser = function(){
        return user;
    };

    Box.prototype.setUser = function(value){
        user = value;
    };

})();

var box = new Box('kkk');
console.log(box.getUser());
box.setUser('aaa');
console.log(box.getUser());

var box2 = new Box('nnn');
console.log(box.getUser());





