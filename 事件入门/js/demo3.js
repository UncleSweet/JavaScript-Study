
/* 
    keyCode      是键码，是一个数字（适用于keydown keyup）
    charCode     是字符编码，也是数字，不过是适用于识别字母（适用于keypress）
*/

/* 
    非ie取消冒泡    stopPropagation();
    ie取消冒泡      cancelBubble = true;
*/




window.onload = function(){
    /* document.onkeydown = function(evt){
        var e = evt || window.evt;
        alert(e.keyCode);
    }; */

    /*  document.onkeypress = function(evt){
        var e = evt || window.evt;
        alert(e.charCode);
    }; */

    document.onclick = function(evt){
        var e = evt || window.evt;
        alert(e.target);
    }
};







