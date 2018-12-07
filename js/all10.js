


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

//switch
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

//for迴圈
//用分號區隔
for (var i=1;i<10;i++){
    console.log(i+'*'+i+'='+ i*i);
}

//for-array用法
var farms = [
    {
        farmer:'卡斯柏',
        field:16,
        chick:200,
        banana:5000
    },
    {
        farmer:'查理',
        field:10,
        chick:50,
        banana:1000
    },
    {
        farmer:'約翰',
        field:6,
        chick:120,
        banana:3215
    }
]


var farmstotal = farms.length;
console.log(farmstotal);
for (var i=0;i<farmstotal;i++){
    // console.log(farms[i].farmer);
    console.log('第'+ (i+1) +'個農場主人是'+farms[i].farmer)
//第一個農場主人是卡斯柏
}

//撈出哪些的農場小雞數量超過100隻以上

var farmstotal = farms.length;
for (var i=0;i<farmstotal;i++){
    // console.log(farms[i].chick);
    if (farms[i].chick > 100){
        console.log(farms[i].farmer+'的小雞超過100隻以上');
    }
}

//計算今年的香蕉採收總數
var farmstotal = farms.length;
var bananatotal = 0;

for (i=0;i<farmstotal;i++){
    // bananatotal = bananatotal + farms[i].banana;
    bananatotal += farms[i].banana;
}

console.log('今年村子的香蕉採收量'+bananatotal);

//我要找一個農場，買50隻小雞
var farmstotal =farms.length;
for (var i=0;i<farmstotal;i++){
    if (farms[i].chick>50){
        console.log(farms[i].farmer+'的小雞剛好夠');
        farms[i].chick -= 50;
        console.log(farms[i].farmer+'的小雞剩下'+farms[i].chick+'隻');
        break;
    }
}

console.log(farms[0].chick);
