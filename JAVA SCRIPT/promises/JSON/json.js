let employee = {
    name : 'revanth',
    age  : 21,
    hobbies : ['dancing','singing'],
}
console.log(`my name is ${employee.name}`);// string interpolation
console.log(employee);
let jsonObject = JSON.stringify(employee);
console.log(jsonObject);
let jsObject =JSON.parse(jsonObject);
console.log(jsObject);
const employee1 = {
    name :'sundhara',
    age  :21,
    color :'white',
}
console.log('==================');
let {age,color,name} = employee1;
function sum(a,b,...data){
    console.log(data);
}
var total = sum(1,2,3,4,5);
console.log(total);
let obj = {
    name : 'hari',
    age : 21,
}
let obj1 = {
    name :'revanth',
    age  :21,
}
let object = {...obj,...obj1}
console.log(object);
let arr = [1,2,3];
let arr1 = [4,5,6];
let array = {...arr,...arr1}
console.log(array);
