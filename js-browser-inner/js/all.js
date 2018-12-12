// document.querySelector('.hero').style.height = window.innerHeight+"px"

// window.onresize = function(){
//    document.querySelector('.hero').style.height = window.innerHeight+"px"
// }

document.querySelector('.hero').style.height = window.innerHeight + "px"
document.querySelector('.hero').style.width = window.innerWidth + "px"

window.onresize = function(){
   document.querySelector('.hero').style.height = window.innerHeight + "px"
   document.querySelector('.hero').style.width = window.innerWidth + "px"
}