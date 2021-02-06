//console.log(window.navigator.appName);   //浏览器名称，但全部浏览器都显示netscape，不精确

//console.log(window.navigator.appVersion);  //浏览器版本，第一个数字即可

//console.log(window.navigator.userAgent);   //浏览器用户代理字符串，与appVersion类似，前面加多了Mozilla

//console.log(window.navigator.platform);    //浏览器所在的操作系统(win32)

//console.log(BrowserDetect.browser);     //浏览器名称
//console.log(BrowserDetect.version);     //浏览器版本
//console.log(BrowserDetect.OS);          //浏览器所在的系统


//插件检测
//alert(navigator.plugins.length);

for(var i=0;i<navigator.plugins.length;i++){
    document.write("插件名" + navigator.plugins[i].name + '<br/>');
    document.write("文件名" + navigator.plugins[i].filename + '<br/>');
    document.write("描 述" + navigator.plugins[i].description + '<br/>');
    document.write('<br/>');
}

//检测非ie浏览器插件是否存在
function hasPlugin(name){
    var name = name.toLowerCase();      //使name变成小写
    for(var i =0;i<navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }
    return false;
}

console.log(hasPlugin('Viewer'));

