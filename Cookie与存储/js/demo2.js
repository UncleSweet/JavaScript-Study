/* 
    设置cookie
    document.cookie = 'user=lee';
    document.cookie = 'url=yc60.com';
    document.cookie = 'email=2577817403@qq.com'; 

    console.log(document.cookie); 
*/

//设置cookie
function setCookie(name,value,expires,path,domain,secure){
    var cookieName = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if(expires instanceof Date){
        cookieName += ';expires=' + expires;
    }
    if(path){
        cookieName += ';path=' + path;
    }
    if(domain){
        cookieName += ';domain=' + domain;
    }
    if(secure){
        cookieName += secure;
    }
    alert(document.cookie = cookieName);
}

//获取cookie
function getCookie(name){
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if(cookieStart>-1){
        var cookieEnd = document.cookie.indexOf(';',cookieStart);
        if(cookieEnd == -1){
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length,cookieEnd));
    }
    return cookieValue;
}


//设置过期时间
function setCookieDate(day){    
    var date = null;
    if(typeof day == 'number' && day>0){
        date = new Date();
        date.setDate(date.getDate() + day);
    }else{
        throw new Error('您传递的天数不合法，必须是数字且大于0')
    }
    return date;
}


//定义cookie
setCookie('user','lee',setCookieDate(7));
setCookie('url','yc60.com',setCookieDate(2));
setCookie('email','2577817403@qq.com',setCookieDate(2));

//输出cookie的值
console.log(getCookie('user'));
console.log(getCookie('url'));
console.log(getCookie('email'));