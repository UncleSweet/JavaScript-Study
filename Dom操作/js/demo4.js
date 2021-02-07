window.onload = function(){
    var box = document.getElementById('box');
    //console.log(box.firstChild.nodeName);
    //console.log(box.lastChild);
    //console.log(box.ownerDocument);      //#document,另外一种节点（9）


    //console.log(box.firstChild.nextSibling);    //得到同级下一个节点
    //console.log(box.lastChild.previousSibling)  //得到同级上一个节点                //
    //console.log(box.parentNode);                //得到父级节点(body)

    //属性节点
    //console.log(box.attributes);         //NameNodeMap集合，保存属性节点的列表
    //console.log(box.attributes.length);  //4
    ///console.log(box.attributes['class'].nodeName);  //class
    //console.log(box.attributes['class'].nodeValue); //bbb
    //console.log(box.attributes['class'].nodeType); //2

    /* 

        //console.log(filterWhiteNode(box.childNodes).length);
        //console.log(deleteWhiteNode(box.childNodes).length);

        1、忽略空白符号节点
        function filterWhiteNode(node){
            var ret=[];
            for(var i=0;i<node.length;i++){
                if(node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){
                    continue;
                }
                else{
                    ret.push(node[i]);
                }
            };
            return ret;
        }

        2、移除空白符号节点
        function deleteWhiteNode(node){
            for(var i=0;i<node.length;i++){
                if(node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){
                    node[i].parentNode.removeChild(node[i]);
                }
            };
        return node;
        }

    */
};