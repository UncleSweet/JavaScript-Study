function loadScript(url){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadCss(url){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

loadCss('../css/demo1.css');

/* 
    1、单击事件  onclick
    2、双击事件  ondblclick

    3、鼠标按下  onmousedown
    4、鼠标返回 obmouseup
    5、鼠标到达目标 onmouseover
    6、鼠标离开目标 onmouseout
    7、鼠标移动 onmousemove
   
    8、键盘按下 onkeydown
    9、键盘弹起 onkeyup
    10、只按字符键 onkeypress

    window对象的事件 
    1、加载事件 onload
    2、窗口改变事件 onresize
    3、滚动事件 onscroll

    
    input事件
    1、onselect 选择
    2、onchange 改变
    3、onfocus  焦点
    4、onblur   离开焦点
    5、onsubmit 提交（在form上面触发）
    6、onreset  重置（在form上面触发）  每改变一像素就执行一次

*/


window.onload = function(){
    /* var form = document.getElementsByTagName('form')[0];
    form.onsubmit = function(){
        console.log('提交');
    }
    form.onreset = function (){
        console.log('重置');
    } */

    window.onscroll = function(){
        console.log(1);
    }
};