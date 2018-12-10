var el = document.querySelectorAll('.box');
// console.log(el[0])
var len = el.length;

for (var i = 0;i<len;i++){
    console.log(el[i]);
    el[i].addEvenListener('mousemove',function(e){
        alert('你輸了!!');
    });
}


// var el = document.querySelectorAll('.box');

// var Len = el.length;

// for(var i = 0;i<Len;i++){
//   el[i].addEventListener('mousemove',function(e){
//     alert('你輸了！');
//   });
// }
