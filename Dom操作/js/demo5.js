/* 
    document.write('<p>测试div</p>');    //一般用于测试


    var body = document.getElementsByTagName('body');
    var box = document.getElementById('box'); 
    var p = document.createElement('p');                //只是创建了一个元素节点，没有添加到文档中，只是保存在内存中
    var test = document.createTextNode('测试4');
    var span_test = document.createTextNode('测试4');   //只是创建了一个文本节点，没有添加到文档中，只是保存在内存中  
    

    body[0].appendChild(p);             //没有效果,原因是程序一直往下执行,下面语句覆盖了此语句
    box.appendChild(p);                 //div里面添加了<P></P>


    box.appendChild(p).appendChild(span_test);    //创建一个元素节点span，在里面添加文本节点span_text
    box.appendChild(test);                        //直接在元素节点box里面添加文本节点test


    //兼容处理子节点
    function deleteChildNode(node){
        for(var i=0;i<node.length;i++){
            if(node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){
                node[i].parentNode.removeChild(node[i]);
            }
        }
        return node;
    }
    var product_box = deleteChildNode(box.childNodes);
    console.log(product_box.length);


    //在节点前插入值
    box.insertBefore(span,product_box[1]);       //表示在box子节点下第二个节点前添加元素节点span


    //自定义节点后插入值方法
    function insertAfter(newElement,targetElement){
        var parent = targetElement.parentNode;  //目标节点的父元素
        if(parent.lastChild == targetElement){
            alert("此目标节点是父元素最后的节点了")
            parent.appendChild(newElement);
        }else{
            parent.insertBefore(newElement,targetElement.nextSibling);
        }
        
    }
    insertAfter(span,box);

    //替代节点
    box.replaceChild(span,product_box[0])

    //克隆节点
    box.childNodes[0].cloneNode();    //如果设置为true，则返回此节点所有内容，如果不填或者false则只返回元素节点

    //删除节点
    box.removeChild(box.childeNodes[0]);  //删除box下的第一个节点

*/

window.onload = function(){
    var box = document.getElementById('box'); 
    var em = document.createElement('em');
    var span = document.createElement('span');
    var span_text = document.createTextNode('测试span');

    //兼容处理子节点
    function deleteChildNode(node){
        for(var i=0;i<node.length;i++){
            if(node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){
                node[i].parentNode.removeChild(node[i]);
            }
        }
        return node;
    }

    box.insertBefore(span,deleteChildNode(box.childNodes)[0]);
    span.appendChild(em);
    span.insertBefore(span_text,deleteChildNode(span.childNodes)[0]);

    var span_em_clone = span.childNodes[1].cloneNode(true);

    //自定义节点后插入值方法
    function insertAfter(newElement,targetElement){
        var parent = targetElement.parentNode;  //目标节点的父元素
        if(parent.lastChild == targetElement){
            alert("此目标节点是父元素最后的节点了")
            parent.appendChild(newElement);
        }else{
            parent.insertBefore(newElement,targetElement.nextSibling);
        }
        
    }
    insertAfter(span_em_clone,deleteChildNode(box.childNodes)[2]);

};