/* 
    try-catch
    1、可以获取错误信息
    2、可以屏蔽错误，继续执行。
*/


/* 
    try{
        window.abcded();
    }catch(e){          //接受错误对象
        alert(e);       //打印错误对象
    } 
*/

//PS:try表示尝试执行里面的代码，若有错误则执行catch里面的代码

/* 
    try{
        window.abcs();
    }catch(e){
        alert(e.name);          //错误类型，ie不支持
        alert(e.message);       //错误信息
    }
*/

/* 
    function box(){
        try{
            var b = [];
            window.absjdi();
        }catch(e){
            alert(e);
            return;         //这里中断后面的操作
        }finally{
            b = null;
            alert('1');
        }
    }
    box(); 
*/

//new Array(101010101010);  //RangeRrror范围错误

//var box =x;               //ReferenceError引用错误

//a $ b;                    //SyntaxError语法错误

//new 10;                   //TypeError类型错误

// console.error('错误');
// console.info('信息');
// console.log('日志');
// console.warn('警告');

window.onload = function(){
    var box = document.getElementById('box');
    box.onclick = function(){
        this.innerHTML = '被点了';
    }
}


