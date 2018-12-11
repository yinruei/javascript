
var list = document.querySelector('.list li');
console.log(list)
//確認點擊的農夫，以及相關的資訊
// function checkList(e){
//   var num = e.target.dataset.num;
//   var dog = e.target.dataset.dog;
//   console.log('農夫標號是'+num);
//   console.log('有'+dog+'隻狗');
// }
// list.addEventListener('click',checkList,false);


//確認點擊的農夫，以及相關的資訊
function checkList(e){
  var num = e.target.dataset.num;//要怎麼知道target後面可以接什麼
  console.log('農夫編號是'+num);
  var dog = e.target.dataset.dog
  console.log("有"+dog+"隻狗");
}

list.addEventListener('click',checkList,'false')