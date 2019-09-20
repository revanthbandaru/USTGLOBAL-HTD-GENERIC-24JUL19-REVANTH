var num = 10;
var string ='10';
if(num==string){
    console.log("equals");
}else{
    console.log("not equal");
}
// /it will compare only value
var num = 10;
var string ='10';
if(num===string){                    
    console.log("equals");
}else{
    console.log("not equal");
}
var char =null;
var nums = true;
var chars;
console.log(typeof num);
// it will compare the type of the value
console.log(typeof chars);
console.log(typeof char);
console.log(typeof nums);
var person = new Object();
console.log(typeof person);
var fruits =new Array(5);
console.log(typeof fruits);
console.log("==========================");
var age=21;
var ager=(age>=21)? 'adult':'child';
console.log(ager);
var agers=(age>21)?'greater':(age===21)? 'not greater':'smaller';
console.log(agers);
var emp=[{
    name:'ranveer',
    age:31,
},
{
    name:'deepika',
    age:29,
},
{
    name:'bhagat singh',
    age:25,
}
]
for(var i=0;i<emp.length;i++){
    console.log(emp[i]);
}
console.log("==========================");
var hobbies=['cricket','hockey','carroms','chess'];
for(var i of hobbies){
    console.log(i);
}
// only for arrays---------------------->
var hobbies=['cricket','hockey','carroms','chess'];
for(var index in hobbies){
    console.log(index);
}
var pre={
    name:'revanth',
    age:21,
}
for(var index in pre){
    console.log(index);
}
// for(var value of pre){
//     console.log(value);
// }
console.log("===========for in is used for(index) and for objects===========")
