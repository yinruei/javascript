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
// console.log(farmLen);
var str = '';
for (var i =0;i<farmLen;i++){
    var content = '<li>'+ farms[i].farmer +'</li>';
    str += content;
    // console.log(str);
    // el.innerHTML = content; //innerHTML會刪掉再重新填入一筆新的資料
}
el.innerHTML = str;