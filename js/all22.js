var el = document.querySelector('.link');

el.addEventListener('click',function(e){
    //取消元素默認行為

    //原本點連結會跳轉到指定網頁

    //submit按鈕，先透過我的js去查詢表單有無錯誤，post去傳送
    e.preventDefault();
    console.log('test')
},false)