var myMonth = 5;
var thisMonth = 12;
var birthdaycheck = myMonth == thisMonth;

document.getElementById('birthdayId').textContent = birthdaycheck;

var nowPeople = 1;
var totalPeople = 2;
var allPeopleNoHereCheck = totalPeople !== nowPeople;

console.log(allPeopleNoHereCheck);
document.getElementById('peopleId').textContent = allPeopleNoHereCheck;