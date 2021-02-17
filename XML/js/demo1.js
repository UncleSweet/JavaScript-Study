
//这里是只有ie可以用
function createXMLDOM(){
    var version = [
                    'MSXML2.DOMDocument6.0',
                    'MSXML2.DOMDocument3.0',
                    'MSXML2.DOMDocument'
    ];

    for(var i = 0;i<version.length;i++){
        try{
            var xmlDom = new ActiveXObject(version[i]);
            return xmlDom;
        }catch(e){
            //跳过
        }
    }
    throw new Error('您的系统或者浏览器不支持msxml库');
}

var xmlDom = createXMLDOM();
/* 
    载入xml文件：两种方式： 1、加载XML字符loadXML()  2、加载XML外部文件load()
*/
xmlDom.load('../xml/demo.xml');
alert(xmlDom.xml);

