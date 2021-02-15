addEvent(window,'load',function(){
    var form = document.getElementById('myForm');
    var city = form.elements['city'];
    var p = document.getElementById('show');

    //city.multiple = true;         //多选
    //city.size = 10;               //长度
    //alert(city.type)              //判断单选还是多选

    //alert(city.options);          //列表集合
    //alert(city.options[0]);       //列表第一项

    /* addEvent(city,'change',function(evt){
        var e = evt  || window.evt;

        if(new RegExp(city.options[this.selectedIndex].text,'g').test(p.innerHTML)){
            preDef(e);
        }else{
            p.append(city.options[this.selectedIndex].text+",");
        }

    }); */


    //使用option构造函数添加
    var option = new Option('北京t','北京v');
    city.appendChild(option);   //IE不兼容
    city.add(option,0);         //0表示位置
});