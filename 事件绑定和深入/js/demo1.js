//w3c自带的两个添加事件和删除事件【addEventListener,removeEventListener】
/* 
    1、解决覆盖问题
    2、解决函数屏蔽问题
    3、解决传递this问题
    4、解决添加一个额外的方法，不会被覆盖或者只能执行一次
*/

/* 
window.addEventListener('load',function(){
    var box = document.getElementById('box');
    box.addEventListener('click',function(){
        alert('lee');
    },false);
    box.addEventListener('click',toRed,false);
},false)

function toRed(){
    this.className = 'red';
    removeEventListener('click',toRed,false)
    this.addEventListener('click',toBlue,false);
}

function toBlue(){
    this.className = 'blue';
    this.removeEventListener('click',toBlue,false)
    this.addEventListener('click',toRed,false);
} */


//IE自带的两个方法【ie8以下】
//attachEvent,detachEvent
/* 
    1、解决覆盖问题，不可定义冒泡和捕抓，但执行顺序由下往上
    2、未解决函数屏蔽问题
    3、不能传递this
    4、解决添加一个额外的方法，不会被覆盖或者只能执行一次
*/

//w3c阻止默认行为evt.preventDefault();
//ie阻止默认行为evt.returnValue = fasle;

//contextmenu 鼠标右击事件
//beforeunload  跳转前提示信息。