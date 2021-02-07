//文本节点 不等于 文本内容
//nodeValue  获取文本节点文本值
//nodeType   判断节点的类型
//nodeName   获取节点的标签名


window.onload = function(){
    //var box = document.getElementById('box');
    //console.log(box.nodeType);      //获取元素节点类型值，1
    //console.log(box.nodeName);      //作用类似于tagName，DIV
    
    
    //console.log(box.nodeValue);     //null

    //console.log(box.childNodes);           //NodeList集合    
    //console.log(box.childNodes.length);    //3

    /*  
        childNodes[0]第一个节点为：111             文本节点(3)
        childNodes[1]第二个节点为：<em>倾斜</em>   元素节点(1)
        childNodes[2]第三个节点为：结尾            文本节点(3)
    */

    /* 
        for(var i=0;i<box.childNodes.length;i++){
            if(box.childNodes[i].nodeType === 3){
                console.log("文本节点："+box.childNodes[i].nodeValue);
            }else{
                console.log("元素节点："+box.childNodes[i].nodeName);
            }
        } 
    */

   var pox = document.getElementById('pox');

   console.log(pox.innerHTML);
   console.log(pox.childNodes.length);
   console.log(pox.childNodes[0].nodeType);
   console.log(pox.childNodes[1].nodeType);

};