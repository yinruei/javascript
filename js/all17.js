var farms= [
    {
        farmer:'卡斯柏',
        dogs:['張母士','龐的']
    },
    {
        farmer:'查里',
        dogs:['皮皮']
    }
];

var el = document.querySelector('.list');
var farmLen = farms.length;
for (var i=0;i<farmLen;i++){
    var str = document.createElement('li');//他會保留，不會刪除
    str.textContent = farms[i].farmer;
    el.appendChild(str);//這是在後面增加，也有在前面增加的方法
}
