
//console.log(typeof document.cookie);          //string
//完整格式：document.cookie = 'user=值;expires;=失效时间;domain='域名访问';path=限制路径访问;secure=安全的https限制通信'


    var date = new Date();
    date.setDate((date.getDate() + 7));
    document.cookie = 'user=' + encodeURIComponent('谢家铖')+';expires='+date;

    console.log(decodeURIComponent(document.cookie));


