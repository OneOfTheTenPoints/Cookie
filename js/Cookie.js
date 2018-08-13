/**
 * Created by Administrator on 2017/8/3.
 */
function setCookie(key,value,day) {
    if(arguments.length == 2)
    {
        document.cookie = key+"="+value;
    }else if(arguments.length ==3)
    {
        //document.cookie = "love=yellow;expires=" + date;
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key+"="+value+";expires="+date;
    }

}
function getCookie(key) {
    console.log(document.cookie);
    var cookieStr = document.cookie;
    //[[love,yellow],[name,ls],[color,red]]
    //001 把获取的cookie切割数组
    var arrT = cookieStr.split("; ");
    //console.log(arrT);
    for(var i = 0;i<arrT.length;i++)
    {
        //002 得到当前的元素 :love=yellow
        var tmpArr = arrT[i].split("=");
        //console.log(tmpArr);
        if(tmpArr[0] == key)
        {
            return tmpArr[1];
        }
    }
}
function removeCookie(key) {
    //addCookie(key,"");
    setCookie(key,"",-1)
}