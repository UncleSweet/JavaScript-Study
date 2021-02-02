/* 1.创建数组【也可以不用new关键字】*/
/* 
var box = new Array();
var box = new Array(10);
var box = new Array('谢家铖',21,170);

var box = Array();
var box = Array(10);
var box = Array('谢家铖',21,170); 
*/

/* 2.使用字面量创建数组 */
//var box = [];
//var box = ['谢家铖',21,170];
//var box = [1,2,];
//var box = [,,,,];

/* 创建一个稍微复杂的数组 */
/* var box = [
            {                   //第一个元素一个对象
                name:'谢家铖',
                age:21,
                tall:170
            },
            ['谢家铖',21,170],  //第二个元素是字面量创建的一维数组
            21+170,            //第三个元素是数值
            new Array(1,2,3)   //第四个元素是new创建的一维数组
];

console.log(box[0].name);      //谢家铖 */

/* 数组最多包含4294967295个元素，超出即异常 */

var box = [1,2,6,4,5];
console.log(box.length);
console.log(box.push(4));       //把4加到最后并且获得长度
console.log(box.pop());         //移除最后的元素，并返回移除元素
console.log(box.shift())        //移除开头的元素，并返回移除元素
console.log(box.unshift(1));    //加到开头，并且获得长度

console.log(box.reverse());     //反向排序
console.log(box.sort());        //从小到大排序

var box2 = box.concat('计算机编程');     //在box后面加上新元素然后赋值给box2

//var box2 = box.slice(0,2);             //截取角标为2之前的元素,创建新数组box2，box不变
//console.log(box);

//var box2 = box.splice(0,2,'计算机1','计算机2');              //截取角标为2之前的元素，创建新数组box2，并且box少了截取的元素
console.log(box);
console.log(box2);






