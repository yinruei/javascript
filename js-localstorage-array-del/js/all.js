var country = [
  {
    farmer:'卡斯伯'
  }
  ,{
    farmer:'查理'
  },{
    farmer:'約翰'
  }
]
var list = document.querySelector('.list');

//更新農場資料
function updateList(){
  var str = '';
  var len = country.length;
  for(var i = 0;i<len;i++){
    str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
  }
  list.innerHTML = str;
}
updateList();

//確認點擊的農夫是誰
function checkList(e){
  var num = e.target.dataset.num;
  console.log(num)
  // console.log(e.target.nodeName);
  if(e.target.nodeName !== 'LI'){return};
  country.splice(num,1);//刪除資料; num指的是從哪裡開始，1指的是刪除幾筆資料
  updateList();
}
list.addEventListener('click',checkList,false);