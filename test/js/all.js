var data=[
    {
        money: 5
    },
    {
        money: 7
    },
    {
        money: 12
    },
];
console.log(data)

var arr = data.filter(function(obj){
    return obj.money < 10;
})
console.log(arr)