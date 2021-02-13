/* 
    需求分析：点击鼠标获取对应的值（左中右）
*/


window.onload = function(){
    document.onmousedown = function(evt){
        var e = evt || window.evt;
        /* if(getButton(e) == 0)  alert('左键');
        if(getButton(e) == 1)  alert('中键');
        if(getButton(e) == 2)  alert('右键'); */
    };
};

/* 
    1、ie浏览器左键为1，中建为4，右键为2
    2、非ie浏览器左键为0，中建为1，右键为2
*/

function getButton(evt){
    var e = evt || window.evt;
    if(evt){
        return e.button;
    }else if(window.evt){
        switch(e.button){
            case 1:
                return 0;
            case 4:
                return 1;
            case 2:
                return 2;
            case 0:             //这个是为了兼容onkeyup,设置为默认左键
                return 0;
        }
    }
    
}