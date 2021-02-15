addEvent(window,'load',function(){
    var form = document.getElementById('myForm');
    var user = form.elements['user'];
    var content = form.elements['content'];

    //【兼容封装】选择部分文本
    //getSelectText(user,2,4);


    addEvent(user,'select',function(){
        //alert(this.selectionStart);
        //alert(this.selectionEnd);
        //alert(this.value.substring(this.selectionStart,this.selectionEnd))
    });


    
});