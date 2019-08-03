// 设置cookie
const setCookie = (key,val,day)=>{
    if (day) {
        var d = new Date();
        d.setDate(d.getDate() + day);
        // escape  编码
        document.cookie = key + '=' + escape(val) + '; expires=' + d;
    } else {
        document.cookie = key + '=' + escape(val);
    }
}

// 获取cookie
const getCookie = (key)=>{
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++){
        var arr2 = arr1[i].split('=');
        if (arr2[0] == key) {
            // unescape  解码
            return unescape(arr2[1]);
        }
    }
    return '';
}

// 删除cookie
const removeCookie = (key)=>{
    setCookie(key,'123',-2);//设置为过期
}


export default {
    getCookie,
    setCookie
}
