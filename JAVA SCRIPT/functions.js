function sum(num1,num2){
if(num1!==undefined&&num2!==undefined){
     sumValue=num1+num2;
    console.log("sum of value "+sumValue);
}
}
sum(1,221);
var sumValue=sum(21,23);
function sum(num3,num4){
    if(num3!==undefined&&num4!==undefined){
        sumValue=num3+num4;
        return sumValue;
    }
}
console.log(sumValue);
(function(num5,num6){
    var sumData =num5+num6; 
    console.log('sumValue'+sumData);
}(10,20));
console.log("========================");
var sub=(num1,num2)=>{
    subVal=num1-num2;
    return subVal;
}
var subval =sub(20,10);
console.log(subval);
console.log("===================");
// var sumVal=(num1+num2) => num1+num2;
// var sumData= sumVal(10,20);

var message = 'hello';
console.log(message);
message = message + 'world';
console.log(message);
var message1 = message;
console.log(message1);
message = 'hi';
console.log(message);
console.log(message1);
console.log("========================");
var person = {
    name :'samantha',
    age : 29,
    color :'white',
}
console.log(person);
var person1 = person;
console.log(person);
person1.name = 'rajini';
console.log(person1);
person.name='kajal';
console.log(person);
console.log(person1);
function first(){
    console.log('first');
}
function second(){
    console.log('second');
}
first();
second();
console.log("==============================");
// named functions can be called before and after declaration also.
function first(){
    setTimeout(function(){
        console.log('first');    
    },0);
}
function second(){   
    console.log('second');
}
first();
second();
console.log('==============================');
function first(){
    setTimeout(function(){
        console.log('first');    
    },0);
}
function second(){   
    console.log('second');
}
first();
second();
// console.log('================================')
// function first(callback){
//     setTimeout(function(){
//         console.log('first');
//         callback();    
//     },1000);
// }
// function second(){   
//     console.log('second');
// }
// first(second);
// console.log('=======================');
// console.log('================================');
// function first(callback){
//     setTimeout(function(){
//         console.log('first');
//         callback();    
//     },1000);
//     console.log('this is first');
// }
// function second(){   
//     console.log('second');
// }
// first(second);
var hobbies = ['carroms','football','chess','snake&ladder','cricket'];
hobbies.forEach(function(value,index){
    console.log(value);
});
var hobbies = ['carroms','football','chess','snake&ladder','cricket'];
hobbies.forEach(function(value,index){
    if(value.length>7){
    console.log(value);
    }
});
console.log(myName);
 var myName = 'chandan shetty';
function getAge(){
    console.log(age);
    var age =21;
    console.log(age)
}
getAge();
console.log('================================');
var hobbies = ['cricket','football','volleeyball','kabaddo'];
var checkArray=Array.isArray(hobbies);
console.log(checkArray);
var inserted=hobbies.push('gardening');
console.log(inserted);
var contains=hobbies.includes('gardening',3);
console.log(contains);
console.log(hobbies.pop());
var nhb= hobbies.unshift('swimming','breathing');
console.log(nhb);
console.log(hobbies.shift());
console.log(hobbies.splice(0,2,'eating','sleeping'));
console.log(hobbies.slice(0,4));
console.log(hobbies.join('---'));
console.log(hobbies.indexOf('football',1));
var num=[10,20,30,40,50,60];
var num1=[];
var num1=num.map(function(value,index){
  var  value= value+10;
    return value;
})
console.log(num1);
var num2=[10,25,8,65,95,85,52,14,5];
var num3=[];
num3=num2.filter(function(value){
    return value>10&&value<=85;
})
console.log(num3);
var items=[{
    name :'lipstick',
    price: 95,
    id   :1,
},
{
    name:'shoe',
    price:2000,
    id:2,
},
{
    name:'watch',
    price:300,
    id:3
},
{
    name:'perfume',
    price:500,
    id:4,
}];
var arr=[];
arr=items.map(function(value){
  value.price = value.price+100;
  return value.price;
});
console.log(arr);
var item=[{
    name :'lipstick',
    price: 95,
    id   :1,
},
{
    name:'shoe',
    price:2000,
    id:2,
},
{
    name:'watch',
    price:300,
    id:3
},
{
    name:'perfume',
    price:500,
    id:4,
}];
var tim=[];
tim=item.filter(function(value){
    var itemFiltered = value.price>100&&value.name.length>5;
    return itemFiltered;
});
console.log("=====================");
console.log(tim);
console.log("============------------============");
function sum(a,b){
    function addSum(){
        return a+b;
    }
    return addSum;
}
var addFun=sum(10,30);
var result=addFun();
console.log(result);
console.log(window);
console.log(this);
console.log(this===window);
var name = 'revanth';
console.log(window.name);
console.log(this.name);
var echo = {
    name:'dhulquar salman',
    age :31,
    getName : function() {
        console.log(this);
        console.log(window);
        getData();
        function getData(){
            console.log("get data method"+this);
            console.log(this.name);
        }
        return this.name;
        
    }
}
var get = echo.getName();
console.log(get);
for(var i=0;i<5;i++){
    console.log(i);
}
console.log(i);
for( let j=0;j<5;j++){
    console.log(j);
}
// console.log(j);


















