/*
    //对象表示
    var box = {
        name : 'UncleSweet',
        age : 100
    }; 

    //JSON对象表示
    {
        name:"UncleSweet"
        age:100
    }

    //普通数组
    var box = [100,'kkk',true];

    //JSON数组
    [100,'kkk',true];


    //最常用的JSON结构
    [
        {
            "title":"a",
            "num":1
        },

        {
            "title":"b",
            "num":2
        },

        {
            "title":"c",
            "num":3
        }
    ]
*/


//模拟加载JSON数据字符串的过程，var json = load('demo.json');  把json字符串加载进来且赋值给json
/* 
var json = '[{"title":"a","num":100},{"title":"b","num":2}]';
    console.log(JSON.parse(json));                      //把json转换成原生js【解析】
    console.log(JSON.parse(json,function(key,value){
        if(key == 'title'){
            return 'Mr.'+value;
        }
        else{
            return value;
        }
    }));  
 
*/

var json = [{title:"a",num:100},{title:"b",num:2}];
console.log(JSON.stringify(json));    //把里面的属性名加上双引号【序列化】
console.log(JSON.stringify(json,['title'],4));
console.log(JSON.stringify(json,function(key,value){
    if(key == 'title'){
        return "Mr."+value;
    }else{
        return value;
    }
},4));




