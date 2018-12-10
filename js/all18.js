var el = document.querySelector('.btn');
// el.onclick = function(e){
//     console.log(e.x);
//     // alert("hello");
// }

//監聽  
//選擇事件，代入匿名function, false
el.addEventListener('click',function(e){
    alert('hello');
},false)