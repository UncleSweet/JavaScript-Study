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
        throw new Error('您 系统或浏览器不支持MSXML库');
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



var xmlStr = '<root><user>lee</user></root>';   //模拟xml里面的语法
var xmlDOM = getXMLDOM(xmlStr);
//console.log(xmlDOM);
console.log(serializerXML(xmlDOM));