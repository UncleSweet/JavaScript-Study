//1
var box = 'Mr.xie';  //这是一个基本类型
box.name = 'Mr.xie1';
box.age = function(){
    return 100;
};
alert(box);                         //Mr.xie
alert(typeof box);                  //string
alert(box.name.substring(2));       //Uncaught TypeError: Cannot read property 'substring' of undefined 没有找到原型链
alert(box.substring(2));            //.xie
alert(box.name);                    //undefind
alert(box.age());                   //String.js:10 Uncaught TypeError: box.age is not a function 找不到这个自定义的方法 

//2
var box = new String('Mr.xie'); //这是一个引用类型
box.name = 'Mr.xie1';
box.age = function(){
    return 100;
};
alert(box);                         //Mr.xie
alert(typeof box);                  //object
alert(box.name.substring(2));       //.xie1
alert(box.substring(2));            //.xie
alert(box.name);                    //Mr.xie1
alert(box.age());                   //100


/* 
    总结：      共同点：都是可以使用系统自带的方法substring
               不同点：如果是基本类型，是不允许自定义属性和方法的（例如1）
                      如果是引用类型，是允许自定义属性和方法的（例如2）
*/