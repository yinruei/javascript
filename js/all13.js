var el = document.querySelector('.titleClass a');
el.setAttribute('href','https://tw.yahoo.com/');

var el2 = document.querySelector('.str');
el2.setAttribute('id','strId');

var el3 = document.querySelector('.titleClass a').getAttribute('href');
console.log(el3)

var el4 = document.querySelector('.titleClass a').textContent;
console.log(el4)

var el5 = document.querySelector('.titleClass a').innerHTML;
console.log(el5);

var el6 = document.querySelector('.titleClass a');
console.log(el6);