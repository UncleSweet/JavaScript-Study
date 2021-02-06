//延时函数（执行函数，时间）

/*
1、
setTimeout(alert('111'),1000);    //不推荐，容易出错，不易于维护

2、                               //不推荐，比较繁琐且真假代码量
var box = function(){
    alert('111');
};
setTimeout(box,1000); 

3、                               //推荐，扩展性好，封装性好
var box = setTimeout((
    function(){
        alert('111');
    }
),1000);

*/

/* 
//超时调用
var aaa = setTimeout(
    function(){
        alert('111');
    },1000);

//取消调用
clearTimeout(aaa); 
*/


/* 
//间歇调用
var box = setInterval(
    function(){
        alert('111');
        console.log(1);
    },1000);

//取消调用
clearInterval(box);
*/

/*
//使用间歇调用，模拟定时器(使用匿名函数和封装，不过不推荐使用)
var num=0;
var max=5;

var time = setInterval(
    function(){
        num++;
        document.getElementById('time').innerHTML = num;
        if(num == max){
            clearInterval(this.time);
            alert('5秒到了！');
            console.log(typeof this.time);
        }
    }
,1000);
*/


/* 
//使用超时调用，模拟定时器（使用递归方法，推荐使用）
var num=0;
var max=5;

function time(){
    num++;
    document.getElementById('time').innerHTML = num;  
    if(num == max){
        alert("5秒到了");
    }
    else{
        setTimeout(time,1000);          //使用递归想法，调用本身
    }
}

setTimeout(time,1000); 
*/

/*
需求：模拟解决window.location.search 获取值
    1、把第一个？去掉
    2、把&为分隔符分成两个数组赋值到自身(searchs)
    3、把=为分隔符分成两个数组赋值到str
    4、定义两个变量分别获取str[0],str[1]
    5、创建一个数组args以键值对的方式存放数据,return args;
*/

function getArgs(){
    var searchs = '?id=5&search=ok';
    searchs= searchs.substring(1);            //id=5&secrch=ok
    searchs = searchs.split('&');             //id=5,secrch=ok
    var str=null,key=null,value=null,args=[];

    for(var i = 0;i < searchs.length ; i++){
        //console.log(str[i]);
        str = searchs[i].split('=');
        key = str[0];
        value = str[1];
        args[key]=value;            //arge是有键值对数值
    }
    return args;                    //返回是一个键值对数组，不可用循环遍历
}

var args = getArgs();              //构造函数才用new运算，普通函数不用
console.log(args['id']);           //5
console.log(args['search']);       //ok







