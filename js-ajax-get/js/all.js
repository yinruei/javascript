// 200 資料有正確回傳，有撈到
// 404 資料讀取錯誤，沒撈到
var xhr = new XMLHttpRequest();

// readyState
// 0 - 你已經產生了一個 XMLHttpRequest，但是還沒有連結你要撈的資料

// 1 - 你用了open()，但你還沒有把資料傳送出去

// 2 - 偵測到你有用send

// 3 - loading

// 4 - 你撈到資料了，數據已經完全接收到了

// 格式、要讀取的網址、同步與非同步
// 格式 : get(讀取資料)、post(傳送資料到伺服器)
// true : 非同步，資料不會傳回來，就讓程式繼續往下跑，等到回傳才會自動回傳
// false : 他會等到資料傳回來，才會讓程式繼續往下跑

xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json','true')

//空的資料
xhr.send(null);

console.log(xhr.responseText);

xhr.onload = function(){
    console.log(xhr.responseText);
    if (xhr.status == 200){
        var str = JSON.parse(xhr.responseText);
        document.querySelector('.message')
        .textContent = str[0].name
    }else if (xhr.status == 404){
        console.log('資料錯誤!!')
    }
   
}
// 1.建立了一個xmlhttprequest
// 2.傳送到對方伺服器要資料
// 3.回傳資料到自己的瀏覽器
// 4.拿到資料後再看要怎麼處理
