/* 
    1、thead,tfoot,captiion标签在表格里只能有1个
    2、tr,td,th,tbody标签在表格里可以有多个

    使用DOM创建一个表格（原生型）
    var table = document.createElement('table');
    table.setAttribute('width',300);
    table.setAttribute('border',1);

    var caption = document.createElement('caption');
    table.appendChild(caption);

    var captionText = document.createTextNode('人员表');
    caption.appendChild(captionText);

    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var th_data = ['姓名','性别','年龄'];

    for(var i =0 ;i<3;i++){
        tr.appendChild(document.createElement('th')).appendChild(document.createTextNode(th_data[i]));
    }
    
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    document.body.appendChild(table);


    //使用DOM获取表格数据
    var table = document.getElementsByTagName('table')[0];
    console.log(table.caption.innerHTML);
    table.caption.innerHTML = '人员表改';

    console.log(table.tHead);       //定位到thead
    console.log(table.tBodies[0]);  //定位到第一个tbody
    console.log(table.tFoot);       //定位到tfoot

    console.log(table.rows);        //获取table里面tr的数量

    //console.log(table.tBodies[0].rows[0].deleteCell(0));   //伤处tbody下面第一行第一个数据
*/

window.onload = function(){
    var table = document.createElement('table');
    table.setAttribute('width',300);
    table.setAttribute('border',1);

    table.createCaption().innerHTML = '人员表（DOM操作）';
    
    //自定义添加tr方法
    function insertTr(TargertElement,acount){
        for(var i =1;i<=acount;i++){
            TargertElement.insertRow(0);
        }
    }

    //自定义添加th方法
    function insertTh(TargertElement,acount){
        for(var i =1;i<=acount;i++){
            TargertElement.appendChild(document.createElement('th'));
        }
    }

    //自定义添加td方法
    function insertTd(TargertElement,acount){
        for(var i =1;i<=acount;i++){
            TargertElement.insertCell(0);
        }
    }

    //自定义添加innerhtml方法
    function addText(TargertElement,ary){
        if(ary.length >= 1){
            for(var i =0;i<ary.length;i++){
            TargertElement.cells[i].innerHTML = ary[i];
            }
        }else{
            TargertElement.cells[0].innerHTML = ary;
        }
    }

    var thead = table.createTHead();
    insertTr(thead,1);
    insertTh(thead.rows[0],3);
    addText(thead.rows[0],['姓名','性别','年龄']);

    var tbody = table.createTBody();
    insertTr(tbody,2);
    insertTd(tbody.rows[0],3);
    addText(tbody.rows[0],['张三','男','20']);
    insertTd(tbody.rows[1],3);
    addText(tbody.rows[1],['李四','男','22']);

    var tfoot = table.createTFoot();
    insertTr(tfoot,1);
    insertTd(tfoot.rows[0],1);
    tfoot.rows[0].cells[0].setAttribute('colspan',3);
    addText(tfoot.rows[0],1);



    //td.appendChild(document.createTextNode('姓名'));

    document.body.appendChild(table);
};