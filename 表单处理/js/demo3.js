addEvent(window,'load',function(){
    var form = document.getElementById('myForm');
    var user = form.elements['user'];

    /* 
        过滤输入模式：要求只能输入数字
        1、禁止非数字键的输入，阻止非数字的默认行为
        2、验证后取消，输入了非法字符后，判断然后再清除文本
    */

    //禁止非数字的输入
   /*  addEvent(user,'keypress',function(evt){
        var e = evt || window.evt;
        var charcode = getKey(e);
        //alert(String.fromCharCode(charcode));    //把数字转换成字符
        if(!/\d/.test(String.fromCharCode(charcode)) && charcode>0 ){
            preDef(e);          //屏蔽掉非数字的输入
        }
    });

    //验证后取消
    addEvent(user,'keyup',function(){
        this.value = this.value.replace(/[\D]/g,'');
    });
    */

    /* 
        1、cooy 复制事件    beforecopy   复制事件前
        2、cut  剪切事件    beforcut     剪切事件前
        3、paste 粘贴事件   beforepaste  贴事件前 

   addEvent(user,'cut',function(evt){
        var e = evt || window.evt;
        preDef(e)
    });

    addEvent(user,'copy',function(evt){
        var e = evt || window.evt;
        preDef(e)  
    });

    addEvent(user,'paste',function(evt){
        var e = evt || window.evt;
        preDef(e)
    });

    */

    //需求分析：输入达到maxlength时光标跳转到下一个
    //思路，首先设置最大输入量，如果达到最大输入量则把光标跳转到下一个

    addEvent(form.elements['a1'],'keyup',tabForward);
    addEvent(form.elements['a2'],'keyup',tabForward);
    addEvent(form.elements['a3'],'keyup',tabForward);


    function tabForward(evt){
        var e = evt || window.evt;
        //获取目标对象;
        var target = getTarget(e);

        if(target.value.length == target.maxLength){
            for(var i = 0;i<form.elements.length;i++){
                if(form.elements[i] == target){
                    form.elements[i+1].focus();
                    return;
                }
            }
        }

    }

});