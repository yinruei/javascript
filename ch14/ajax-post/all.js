// var xhr = new XMLHttpRequest();
// xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// xhr.send('email=abcdexx111@gmail.com&password=12345678');

var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')//這個東西就是一般我們在做post API時候最常見的格式
xhr.send('email=aries@gmail.com&password=0331')