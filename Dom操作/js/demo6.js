window.onload = function(){
    //console.log(Node);
    //console.log(document.nodeType);
    //console.log(Node.ELEMENT_NODE);   //元素节点
    //console.log(Node.TEXT_NODE);      //文本节点

    //文本节点操作
    var box = document.getElementById('box');
    var test1 = document.createTextNode('Mr.');
    var test2 = document.createTextNode('Sweet');
    box.appendChild(test1);
    box.appendChild(test2);

    //box.normalize();                     //合并节点
    //box.childNodes[0].splitText(3);              //分离节点
    //box.childNodes[0].deleteData(0,3);           //删除节点0-3的值
    //box.childNodes[0].insertData(0,'hello');       //在0位置添加string
    //box.childNodes[0].replaceData(0,2,'Miss');   //替换0-2位置的值


    console.log(box.childNodes[0].nodeValue);
    console.log(box.childNodes.length);

}