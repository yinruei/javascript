// 200 資料有正確回傳，有撈到
// 404 資料讀取錯誤，沒有撈到

var xhr = new XMLHttpRequest();

xhr.open('get',
'https://hexschool.github.io/ajaxHomework/data.json', 
true);

// true非同步，不會資料傳回來，就讓程式繼續往下跑，
//等到回傳才會自動回傳
//javascript具有非同步的特性

//false 他會等資料傳回來，才會讓程式繼續往下跑

xhr.send(null);
console.log(xhr.responseText);


// CORS 是否可以跨網域撈取資料

// onload :當他確定資料有回傳的時候，就會執行這個function
xhr.onload = function(){
   // console.log(xhr.responseText);
   console.log(xhr);
   if (xhr.status == 200){
      var str = JSON.parse(xhr.responseText)//JSON.parse是將字串轉成陣列或物件，就是把引號拿掉
      document.querySelector('.message').textContent = str[0].name
   }else{
      console.log('資料錯誤!!!');
   }
}


// 1. 建立了一個xmlhttprequest
// 2. 傳送到對方伺服器的資料
// 3. 回傳資料到自己的瀏覽器
// 4. 拿到資料後再看要怎麼處理
