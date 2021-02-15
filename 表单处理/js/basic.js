
//跨浏览器添加事件
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }else if(obj.attachEvent){
        obj.attachEvent('on'+type,fn);
    }
}

//跨浏览器删除事件
function removeEvent(obj,type,fn){
    if(obj.removeEvent){
        obj.removeEventListener(type,fn,false);
    }else if(obj.detachEvent){
        obj.detachEvent('on'+type,fn);
    }
}

//跨浏览器组阻止默认行为
function preDef(evt){
    var e = evt || window.event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnVlaue = false;
    }
}

//跨浏览器获取目标对象
function getTarget(evt){
    if(evt.target){              //w3c
        return evt.target;
    }else if(window.event.srcElement){      //ie
        return window.event.srcElement;
    }
}

//ie选择文本 text.createTextRange(n,m)      //从第n个开始选择后面的m个
//w3c选择文本 text.setSelectionRange(n,m)   //选择n-m个
 
//跨浏览器选择文本
function getSelectText(text,start,num){
    if(text.setSelectionRange){
        text.setSelectionRange(start,num);
        text.focus();
    }else if(text.createTextRange){
        var rang = text.createTextRange();
        rang.collpase(true);
        rang.moveStart('character',start);
        rang.moveEnd('character',num-start);
        rang.select();
    }
}

//跨浏览器获取字符编码
function getKey(evt){
    if(typeof evt.charCode == 'number'){
        return evt.charCode;
    }else{
        return evt.keyCode;
    }
}























