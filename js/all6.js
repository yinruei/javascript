document.getElementById('countId').onclick = function(){
    var hamNum = document.getElementById('hamNumId').type;
    var cokeNum = document.getElementById('cokeNumId').value;
    alert(hamNum);
    alert(cokeNum);
}


//計算漢堡的種類
// function getHamPrice(num){
//     var hamPrice = 50;
//     var total = hamPrice * num;
//     return total;
// }

// var tom = getHamPrice(20);
// var John= getHamPrice(50);
// console.log(john);

function count(price){
    return addTax(price*0.8);
}

function addTax(price){
    return price*1.1;
}

console.log(count(500));
