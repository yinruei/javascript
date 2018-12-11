// 1.將 array 轉為 string 
//JSON.stringify()

// 2.將 sring 轉為 array
//學以上兩點是因為 localstorage 只會保存 string 資料
//JSON.parse( )

// var country = [
//     {farmer:'卡斯伯'}
// ];
// var countryString= JSON.stringify(country);
// console.log(countryString);
// localStorage.setItem('countryItem',countryString);

// var getData = localStorage.getItem('countryItem');
// var getDataAry = JSON.parse(getData);

// console.log(getDataAry[0].farmer);

var country = [
    {farmer:'卡斯柏'}
];

var countryString = JSON.stringify(country);//轉成string格式
console.log(countryString);
localStorage.setItem('countryItem',countryString);

var getData = localStorage.getItem('countryItem');
// console.log(typeof(getData));
var getDataAry = JSON.parse(getData);//轉成array格式

console.log(getDataAry[0].farmer)
