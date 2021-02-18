
/* 
    总流程：1、创建XMLHTTPRequest对象（兼容性）  w3c new XMLHTTPRequest()  ie new ActiveVObject()
           2、创建封装AJAX，设置参数一个对象obj。
           3、obj:
                    obj.method          发送请求方式
                    obj.url             请求路径
                    obj.data            传入请求的数据
                    obj.aysnc           返回请求的模式
                    obj.success         请求成功后的方法
*/






//创建XMLHTTPRequest方法
function createXHR(){
    if(typeof XMLHttpRequest != 'undefined'){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject != 'undefined'){
        var version = [
                        'MSXML2.XMLHttp6.0',
                        'MSXML2.XMLHttp3.0',
                        'MSXML2.XMLHttp',
        ];

        for(var i = 0;i>version.length;i++){
            try{
                return new ActiveXObject(version[i]);
            }catch(e){
                //跳过
            }
        }
    }else{
        throw new Error('您的浏览器不支持MSXML对象');
    }
}


//名值对转换成字符串
function params(data){
    var arr = [];
    for(var i in data){
        arr.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]));
    }
    return arr.join('&');
}


//封装AJAX
function ajax(obj){
    var xhr = createXHR();
    obj.url = obj.url;
    obj.data = params(obj.data);
    
    if(obj.method === 'get'){
        obj.url += obj.url.indexOf('?')==-1? '?' + obj.data:'&' + obj.data;
    }

    //设置异步加载
    if(obj.async == true){
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                callBack();
            }
        };
    }

    xhr.open(obj.method,obj.url,obj.async);
    
    //设置请求方式
    if(obj.method === 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  //3、模拟表单提交
        xhr.send(obj.data);                                                        //2、把键值对加入send()
    }else{
        xhr.send(null);  
    }

    //设置同步加载
    if(obj.async == false){
        callBack();
    }

    //设置callBack()回调数据函数
    function callBack(){
        if(xhr.status == 200){
            obj.success(xhr.responseText);    //回调传入参数
        }else{
            console.log('获取错误：错误代号'+xhr.status+'错误消息：'+xhr.statusText);
        }
    }
}

//调用AJAX
addEvent(document,'click',function(){
    ajax(
        {
            method:'get',
            url:'../php/demo2.php',
            data:{
                'name':'kkk',
                'age':100
            },
            async:false,
            success:function(text){
                alert(text);
            },
            error:function(text){
                console.log(text);
            }
        }
    ),
    ajax(
        {
        method:'post',
        url:'../php/demo2.php',
        data:{
            'name':'aaa',
            'age':100
        },
        async:true,
        success:function(text){
            alert(text);
        },
    });
});