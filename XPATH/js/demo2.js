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



var xmlStr = '<root><user id="5">lee</user><user id="6">Koko</user></root>';   //模拟xml里面的语法
var xmlDOM = getXMLDOM(xmlStr);
//console.log(xmlDOM);
//console.log(serializerXML(xmlDOM));


//W3C

/* 
单一节点
var eva = new XPathEvaluator();
var result = eva.evaluate('root/user[2]',xmlDOM,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);  
if(result != null){
    console.log(serializerXML(result.singleNodeValue));
}
*/

/* 
var result = xmlDOM.evaluate('root/user[2]',xmlDOM,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);  
if(result != null){
    console.log(serializerXML(result.singleNodeValue));
} 
*/

/* 
节点集合 
var result = xmlDOM.evaluate('root/user',xmlDOM,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);  
if(result != null){
    var nodes = [];
    var node = result.iterateNext();        //从0开始查找子节点
    while(node != null){
        nodes.push(node);
        node = result.iterateNext();
    }
}


console.log(serializerXML(nodes[1]));
*/


//跨浏览器单一节点
function selectSingleNode(xmlDOM,xpath){
    var node = null;

    if(typeof xmlDOM.evaluate != 'undefined'){        //w3c
        var patten = /\[(\d+)\]/;
        var flag = xpath.match(patten);
        var num = 0;

        if(flag != null){
            num = parseInt(RegExp.$1) + 1;
            xpath = xpath.replace(patten,'['+num+']');
;        }

        var result = xmlDOM.evaluate(xpath,xmlDOM,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);  
        if(result != null){
          node = serializerXML(result.singleNodeValue);
        }
    }else if(typeof xmlDOM.selectSingleNode != 'undefined'){        //ie
        node = xmlDOM.selectSingleNode(xpath);
    }

    return node;
}

//跨浏览器节点集合
function selectNodes(xmlDOM,xpath){
    var nodes = [];
    if(typeof xmlDOM.evaluate != 'undefined'){
        var patten = /\[(\d+)\]/;
        var flag = xpath.match(patten);
        var num = 0;

        if(flag != null){
            num = parseInt(RegExp.$1) + 1;
            xpath = xpath.replace(patten,'['+num+']');
;        }

        var result = xmlDOM.evaluate(xpath,xmlDOM,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);  
        if(result != null){
            var node = result.iterateNext();        //从0开始查找子节点
            while(node != null){
                nodes.push(node);
                node = result.iterateNext();
            }
        }
    }else if(typeof xmlDOM.selectNodes != 'undefined'){
       nodes = xmlDOM.selectNodes('xpath');
    }
    return nodes;
}

//console.log(selectSingleNode(xmlDOM,'root/user[0]'));

// var nodes = selectNodes(xmlDOM,'root/user')
// console.log(serializerXML(nodes[0]));