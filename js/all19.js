//onclick會一直覆蓋下去，
//以下面這個例子來說，只會出現on-2
var elOn = document.querySelector('.btnOn');
elOn.onclick = function (){
    alert('on-1');
}

elOn.onclick = function (){
    alert('on-2');
}

//事件監聽，不會覆蓋
var elAd = document.querySelector('.btnAdd');
elAd.addEventListener('click',function(){
    alert('add-1')
},false)

elAd.addEventListener('click',function(){
    alert('add-2')
},false)