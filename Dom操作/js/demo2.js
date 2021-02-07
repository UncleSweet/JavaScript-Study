/* window.onload = function(){
    var box = document.getElementById('box');
    box.innerHTML = "玩转<strong>js</strong>";
    console.log(box.innerHTML);
}; */

window.onload = function(){

    /* 
        var li = document.getElementsByTagName('li');
        console.log(li);            //返回数组集合
        console.log(li.item(0));    //第二个<li></li>
        console.log(li.item(1).innerHTML);     //2
    */

    /*  
        var body = document.getElementsByTagName('body')[0];
        console.log(body);      //获取body，根节点
    */

    /* 
        var all = document.getElementsByTagName("*");        //*获取全部标签
        console.log(all.length);    //12
    */

    /*
        var box  = document.getElementsByName('test');
        console.log(box); 
    */

    var box = document.getElementById('box');
    console.log(box.getAttribute('name'));          //获取属性值
    console.log(box.getAttribute('class'));         //pox

    box.setAttribute('title','kkk');                //设置title属性
    console.log(box.getAttribute('title'));         //aaa > kkk

    box.removeAttribute('title');                   //删除title属性
    console.log(box.getAttribute('title'));         //null

};