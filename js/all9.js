

var myBill = 1250;
var VIP = false;
var checkand = myBill > 1000 && VIP == true;
var checkor  = myBill > 1000 || VIP == true;

document.getElementById('andId').textContent = checkand;
document.getElementById('orId').textContent = checkor;