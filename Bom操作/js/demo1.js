/* 
    window是JS最顶层的对象
    window旗下有六大对象。
    window旗下的document对象旗下也有五大对象。
    总结：都是对象。
*/

//alter
//alert('123');


//confirm，按确定返回true，按取消返回false
// if(confirm("请选择！")){
//     alert("您按了确定按钮");
// }
// else{
//     alert("您按了取消按钮");
// }


//prompt第一个参数是提示文本，第二个参数是默认值
// var box = prompt("请输入一个数字",0);
// if(box != null){
//     alert(box);
// }
// else{
//     alert("您点击了取消");
// }


//open
//第一个参数为导航到的URL
//第二个参数窗口的名称或者是窗口的目标
//第三个参数是打开模式 _blank 新建窗口  _parent 本窗口内加载
//open('https://www.baidu.com','baidu');

//var box = open('../html/opener.html','opener');
//box.alert('123');           //代表子窗口调用的


