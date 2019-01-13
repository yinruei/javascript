var regist = document.querySelector('.register');
regist.addEventListener('click',signup,false);

function signup(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);  // {}==>"{}"
    // console.log(typeof(data))
    xhr.send(data)

    xhr.onload = function(){
        console.log(xhr);
        var callbackData = JSON.parse(xhr.responseText);  //"[{}]" ==>>[{}]
        console.log(callbackData);
        var verify = callbackData.message;
        if (verify == '帳號註冊成功'){
            alert('帳號註冊成功!!!');
        }else{
            alert('此帳號已被使用!!');
        }
    }
}

var login = document.querySelector('.login');
login.addEventListener('click',signin,false);

function signin(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data)

    xhr.onload = function(){
        console.log(xhr);
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var verify = callbackData.message;
        if (verify == '登入成功'){
            alert('登入成功!!!');
        }else{
            alert('此帳號不存在或帳號密碼錯誤');
        }
    }
}