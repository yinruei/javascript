var country = [
  {
    farmer:'卡斯伯'
  },
  {
    farmer:'查理'
  }
]
var list = document.querySelector('.list');

//更新農場資料
function updateList(){
  var str = '';
  var len = country.length;
  for (var i = 0;i<len;i++){
    str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
    // console.log(str)
  }
 
  list.innerHTML = str;
  // console.log(list)
}
updateList();

//確認點擊的農夫是誰
function checkList(e){
  var num = e.target.nodeName;
  console.log(e.target.nodeName);
  if(num !== 'LI'){return};//這裡的return指的是終止
  var str = e.target.dataset.num;
  console.log('您現在選擇的農夫是'+country[str].farmer);
  alert('你選擇的農夫是'+country[str].farmer)
}
list.addEventListener('click',checkList,false);