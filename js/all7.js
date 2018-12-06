
var cornField = [];
cornField.push(5);
cornField.push(8);
cornField.push(6);

cornField[0] = 10;

cornField[3] = 100;


// console.log("我總共有"+cornField.length+"個玉米田")//長度
// console.log(cornField);

var farm = {
    farmer: '卡斯柏',
    chick: 15,
    dog: ['張姆士', '龐的']
};

var house = {
    room: 3,
    father: 'tom',
    son: ['john','bob'],
    mom: 'mary'
}

console.log(house.son[0]);

var company = {
    name: '雲灣',
    member: 10,
    manager : '小威'
};

farm.chick = 30//可以用這種方式新增或是直接寫在物件裡面
var dog1 = farm.dog[0]

console.log('我農場裡的第一隻狗叫'+dog1);


//API、後端資料庫、JSON
var farm ={
    farmer: '卡斯柏',
    chick: 15,
    duck: 3,
    dog: ['張姆士', '龐的'],
    goDinner: function(){
        console.log(farm.farmer+',該回家吃晚飯')
    },
    poultryTotal: function(){
        var num = farm.chick + farm.duck
        console.log('我的農場總共有'+ num + '隻家禽');
    },
    totalchick: function(){
        var total_num = farm.chick *12;
        console.log('一年會有'+total_num+"隻雞");
    }
};

farm.goDinner()
farm.poultryTotal()
farm.totalchick()


var farms = [
    {
        farmer: '卡斯柏',
        dogs: ['張姆士','龐的'],
        chick: 15,
        cornField: [8,5,6],
        broccoliField: [6, 6, 6, 6],
        scarecrow: 9
    },
    {
        farmer:'胤瑞',
        dogs: ['皮皮'],
        chick: 30,
        cornField: [18, 12],
        broccoliField: [8, 8, 8],
        scarecrow: 6
    }
];
