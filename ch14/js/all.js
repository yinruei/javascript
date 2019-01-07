var xhr = new XMLHttpRequest();

//readyState
// 0 - 你已經產生一個XMLHttpRequest，但是還沒有連結你要撈的資料
// 1 - 你用了open()，但你還沒有把資料傳送過去
// 2 - 偵測到你有用send
// 3 - loading 有可能資料太到正在loading中
// 4 - 你撈到資料了，數據已經完全接受到了


//格式、要讀取的網址、同步與非同步
//格式 : get(讀取資料)、post(傳送資料到伺服器)
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true)

//空的資料
xhr.send(null);