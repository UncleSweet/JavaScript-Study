/* 
    1、获取form对象的方法
    //var form = document.getElementById('myForm');
    //var form = document.getElementsByTagName('form')[0];
    //var form = document.forms[0];         //通过脚下标获取
    //var form = document.forms['yourForm'];  //通过name获取
*/




addEvent(window,'load',function(){
    var form = document.forms['yourForm'];  //通过name获取
    var button= document.getElementById('userbutton');

   /*  

    //阻止提交
    addEvent(form,'submit',function(evt){
        preDef(evt);
    });

    //让button实现提交功能
    addEvent(button,'click',function(){
        form.submit();
    }); 
    
    //使用ctrl+enter提交
    addEvent(document,'keydown',function(evt){
        var e = evt || window.evt;
        if(e.ctrlKey && e.keyCode == 13){
            form.submit();
        }
    });

    addEvent(form,'submit',function(evt){
        preDef(evt);

        //1、可以防止用户不断点击提交
        document.getElementById('sub').disabled = true;

        //2、可以判断是否已经提交过
        if(flag == true) return;
        var flag = true;

        //模拟延迟
        setTimeout(() => {
            form.submit();
        }, 3000);
    });

    //elements获取form表单的元素表单
    alert(form.elements[0].value);
    alert(form.elements['user'].name);
    alert(form.elements['user'].form.id);

    */


});












