window.onload = function(){
    var box = document.getElementById('box');
    //console.log(!!box.className.match(new RegExp('(\\s|^)'+'ccc'+'(\\s|$)')));

    //判断一个class是否存在，如果有则true如果没有则false
    function hasClass(element,cName){
        return !!element.className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)'));
    }

    function addClass(element,cName){
        if(!hasClass(element,cName)){
            element.className += ' ' + cName;
        }
    }

    function removeClass(element,cName){
        if(hasClass(element,cName)){
            element.className = element.className.replace(
                (new RegExp('(\\s|^)'+cName+'(\\s|$)')),' '
            );
        }
    }

    addClass(box,'ccc');
    removeClass(box,'ccc');

};