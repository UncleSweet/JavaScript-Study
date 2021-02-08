/* 
    Dom扩展

    1、呈现模式

*/

window.onload = function(){
    var ul = document.getElementsByClassName('ul_add');

    //创建删除空白节点的方法
    function removeWhiteNode(node){
        for(var i =0;i<node.childNodes.length;i++){
            if(node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)){
                node.removeChild(node.childNodes[i]);
            }
        }
        return node;
    }
    
    function insertAfter(newElement,targetElement){
        var parent = targetElement.parentNode;
        if(parent.lastChild == targetElement){
            parent.appendChild(newElement);
        }
        else{
            parent.insertBefore(newElement,targetElement.nextSibling);
        }
    }

    //在ul_add下面添加10个<li>测试i</li>
    for(var i =0;i<10;i++){
        insertAfter(document.createElement('li'),removeWhiteNode(ul[0]).childNodes[i]);
        removeWhiteNode(ul[0]).childNodes[i+1].appendChild(document.createTextNode('测试'+(i+1)));
    }

    console.log(removeWhiteNode(ul[0]).childNodes.length);
    
    
    
};
