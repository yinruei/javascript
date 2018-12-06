


var hungry = 9;
//飢餓程度1~10

function eat(food){
    console.log('我現在要吃' + food);
}

if (hungry <= 3){
    eat('披薩');
}else if (hungry <=5 && hungry>3){
    eat('沙拉');
}else if (hungry ==6){
    eat('餅乾');
}else if (hungry <=10 && hungry>7){
    eat('牛排')
}else{
    console.log('我超飽不想吃東西');
}

var light = 'blue';
function lightFun(str){
    console.log('目前是'+str+'警戒');
}

switch(light){
    case 'red':
        alert('紅色警戒');
        alert('快跑!')
        break;

    case 'blue':
        alert('藍色警戒');
        lightFun(light);

        break;
    default:
        alert('沒有任何資料');
        break;
}