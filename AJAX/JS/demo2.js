
//创建请求对象方法
function createXHR(){
    if(typeof XMLHttpRequest != 'undefined'){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObjec != 'undefined'){
        var version = [
                        'MSXML2.XMLHttp6.0',
                        'MSXML2.XMLHttp3.0',
                        'MSXML2.XMLHttp'
        ];

        for(var i =0;i<version.length;i++){
            try{
                return new ActiveXObject(version[i]);
            }catch(e){
                //跳过
            }
        }
    }else{
        throw new Error('您的系统或者浏览器不支持xhr对象');
    }
}

/*
    //页面加载时执行
    addEvent(window,'load',function(){
        var p = document.getElementById('p');
        console.log(p.innerHTML);
        setInterval(changeDate,1000);
    });

    //异步加载数据
    function changeDate(){
        var xhr = createXHR()
        xhr.onreadystatechange = function(){
            if(xhr.readyState ==4){
                if(xhr.status == 200){
                    p.innerHTML = xhr.responseText;
                }else{
                    alert('获取数据错误：'+xhr.status+'错误信息：'+xhr.statusText);
                }
            }
        };
        xhr.open('get','../php/demo2.php',true);
        xhr.send(null);
        //xhr.abort();            //取消异步
    }
*/


/* 
    xhr.readyState
    0 未调用open方法
    1 已经调用open方法但未调用send方法
    2 已经调用send方法但未接受响应
    3 已经接受部分响应数据
    4 已经接受全部响应数据并且可以使用

*/

/* 
    xhr.status
    200:ok成功
    400:语法错误导致服务器不识别
    401：请求需要用户认证
    404：指定的url在服务器上找不到
    500：服务器遇到意外错误，无法完成请求
    503：服务器过载或者维护，无法完成请求
*/ 

//在Web程序中，GET一般是url提交请求，比如：demo2.php?name=kkk&age=100
//POST一般是Web表单提交，比如：<form method="post"><input type='text' name="name" value="kkk"/></form>

/*
//获取头消息
addEvent(document,'click',function(){
    var xhr = createXHR();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                alert(xhr.getAllResponseHeaders());           //获取全部头部信息
                //alert(xhr.getResponseHeader('content-length')); //获取单个头信息
            }else{
                alert('错误代号：'+xhr.status+'错误信息：'+xhr.statusText);
            }
        }
    };


    xhr.open('get','../php/demo2.php',true);
    xhr.setRequestHeader('myheader','kkk');     //设置头信息
    xhr.send(null);
});
*/


/*
//GET请求
addEvent(document,'click',function(){
    var xhr = createXHR();
    var url = '../php/demo2.php';
    url = parseme(url,'name','kkk');
    url = parseme(url,'age',100);

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                alert(xhr.responseText);
            }else{
                alert('错误代号：'+xhr.status+'错误信息：'+xhr.statusText);
            }
        }
    };

    xhr.open('get',url,true);
    xhr.send(null);
});

function parseme(url,key,value){
    url += url.indexOf('?')==-1?'?':'&';                                //判断url后是否有？如果没有则加上，如果有则加上&
    url += encodeURIComponent(key) + '=' + encodeURIComponent(value);   //对加入的字符串进行编码，可以避免特殊字符带来的错误
    return url; 
}
*/


/*
//POST请求
addEvent(document,'click',function(){
    var xhr = createXHR();
    var url = '../php/demo2.php';

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                alert(xhr.responseText);
            }else{
                alert('错误代号：'+xhr.status+'错误信息：'+xhr.statusText);
            }
        }
    };


    xhr.open('post',url,true);              //1、改为post
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  //3、模拟表单提交
    xhr.send('name=anka&age=100');           //2、把键值对加入send()
});
*/


//JSON加载
addEvent(document,'click',function(){
    var xhr = createXHR();
    var url = '../json/demo2.json';

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var box = JSON.parse(xhr.responseText);
                alert(box);
            }else{
                alert('错误代号：'+xhr.status+'错误信息：'+xhr.statusText);
            }
        }
    };

    xhr.open('get',url,true);
    xhr.send(null);
});

function parseme(url,key,value){
    url += url.indexOf('?')==-1?'?':'&';                                //判断url后是否有？如果没有则加上，如果有则加上&
    url += encodeURIComponent(key) + '=' + encodeURIComponent(value);   //对加入的字符串进行编码，可以避免特殊字符带来的错误
    return url; 

}