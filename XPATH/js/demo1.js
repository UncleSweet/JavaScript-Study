//跨浏览器返回xmlDOM对象
//不同浏览器创建xmlDOM都是不一样的

function getXMLDOM(xmlstr){
    var xmlDOM = null;

    if(window.DOMParser != 'undefined'){
        xmlDOM = (new DOMParser).parseFromString(xmlStr,'text/xml');
        var errors = xmlDOM.getElementsByTagName('parsererror');
        if(errors.length>0){
            throw new Error('错误信息：'+errors[0].textContent);
        }
    }else if(typeof window.ActiveXObject != 'undefined'){
        var version = [
                        'MSXML2.DOMDocument6.0',
                        'MSXML2.DOMDocument3.0',
                        'MSXML2.DOMDocument'
        ];

        for(var i=0;i<version.length;i++){
            try{
                var xmlDOM = new ActiveXObject(version[i]);
            }
            catch(e){
                //跳过
            }
        }
        xmlDOM.loadXML(xmlStr);
        if(xmlDOM.parseError != 0){
            throw new Error('错误信息：'+xmlDOM.parseError.reason);
        }
        return xmlDOM;
    }
    else{
        throw new Error('您系统或浏览器不支持MSXML库');
    }

    return xmlDOM;
}

//序列化XML
function serializerXML(xmlDOM){
    var xml = '';

    if(typeof window.XMLSerializer != 'undefined'){
        xml = (new XMLSerializer()).serializeToString(xmlDOM);
    }else if(typeof xmlDOM.xml != 'undefined'){
        xml = xmlDOM.xml;
    }

    return xml;
}



var xmlStr = '<root><user id="5">lee</user><user id="6">Koko</user></root>';   //模拟xml里面的语法
var xmlDOM = getXMLDOM(xmlStr);
//console.log(xmlDOM);
console.log(serializerXML(xmlDOM));


//IE中的两种方法：1、selectSingleNode()获取单一节点，2、selectNodes()获取节点结合；
// var node = xmlDOM.selectSingleNode('root/user');
// alert(node.xml);
// alert(node.tagName);                user
// alert(node.firstChild.nodeValue);   lee

//XPATH规定默认从1开始，但ie从0开始。
//var node = xmlDOM.selectSingleNode('root/user[0]');

//通过text()获取节点的值
//var node = xmlDOM.selectSingleNode('root/user[0]/text()');

//通过//双斜杠在根节点不关心目标元素的层次关系
//var node = xmlDOM.selectSingleNode('root//user');   //若前面有<b></b>也是可以直接找到的

//通过属性找到目标元素
//var node = xmlDOM.selectSingleNode('root/user[@id=5]');

//使用selectNodes()
//var xmlDOM.selectNodes('root/user')
