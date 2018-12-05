function greet(){
    console.log('Hello');
    console.log('請問您想要點什麼?');
}
//全域變數
var total;

function count(oneNum, twoNum){
    //var total = oneNum * twoNum;
    //區域變數
    total = oneNum * twoNum;
    console.log('總數等於: '+ total + "元");
}

count(8,49);
console.log(total);

