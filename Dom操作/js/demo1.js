/* 
    节点分为三类：
    1、元素节点，其实就是标签，<div></div>
    2、属性节点，其实就是标签的id，class
    3、文本节点，其实就是标签内的纯文本，测试
*/

window.onload = function(){
    var box  = document.getElementById('box');
    console.log(box.innerHTML);      //测试
    console.log(box.tagName);        //DIV

    //html属性的直接调用,都是可以赋值的
    console.log(box.id);
    console.log(box.title);
    //console.log(box.style);             //获取style对象
    console.log(box.style.display);
    console.log(box.className);

    console.log(box.kkk);    //自定义属性，属于不合法操作
};

