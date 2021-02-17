

//DOM2级XML（适合ie9,firefox,chrome,opera)
/* 
var xmlDom = document.implementation.createDocument('','root',null);
//console.log(xmlDom);
xmlDom.async = true;            true为异步处理，false为同步处理
xmlDom.onload = function(){
    alert(xmlDom.xml);
}
xmlDom.load('../xml/demo1.xml'); 
*/

//load只是支持firefox和ie



//模拟loadXML()方法，可以简易的创建xml字符串
var xmlParser = new DOMParser();
var xmlStr = '<root>\t\n<user>lee</user>\n</root>';
var xmlDom = xmlParser.parseFromString(xmlStr,'text/xml');
//console.log(xmlDom.getElementsByTagName('user')[0].tagName);

//模拟.xml属性序列化字符串
var serualizer = new XMLSerializer();
var xml = serualizer.serializeToString(xmlDom);
console.log(xml);