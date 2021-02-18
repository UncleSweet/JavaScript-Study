

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


var xhr = createXHR();          //创建xhr对象

xhr.open('get','../php/demo1.php',false);   //准备发送请求，以get方式请求，url是对应的php文件，同步加载
xhr.send(null);                             //发送请求，get不需要数据提交

function btn_click(){
    if(xhr.status == 200){  
        alert(xhr.responseText);                    //获取返回回来的文本
    }
    else{
        alert('数据返回失败：'+xhr.status+'错误信息：'+xhr.statusText);
    }
}

/* 
    200:ok成功
    400:语法错误导致服务器不识别
    401：请求需要用户认证
    404：指定的url在服务器上找不到
    500：服务器遇到意外错误，无法完成请求
    503：服务器过载或者维护，无法完成请求
*/ 

