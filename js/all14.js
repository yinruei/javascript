// var el = document.getElementById('main');
// // el.innerHTML = "<h1 class='blue'>1234</h1>";//外面是單引號的話裡面要用雙引號
// var str = "<h1 class='blue'>1234</h1>"

// el.innerHTML = str + str;

var el = document.querySelector('.list');
var link = 'http://www.google.com.tw';
var name = '卡斯柏';

el.innerHTML = '<li><a href="'+ link + '">'+name+'</a></li>';