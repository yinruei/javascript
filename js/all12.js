// var el = document.querySelector('.titleClass em');
// el.textContent = 'fkl';


var el = document.querySelectorAll('.titleClass em');//會是一個array

el[0].textContent = '123';
el[1].textContent = '456';

var ellen = el.length;
for (i=0;i<ellen;i++){
    el[i].textContent = i + '123'
}