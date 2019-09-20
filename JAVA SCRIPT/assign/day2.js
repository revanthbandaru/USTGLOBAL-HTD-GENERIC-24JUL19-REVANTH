
function factorial(number){
    if(number<1){
        return 1;
    }
 return number*factorial(number-1);     
}
var til=factorial(5);
console.log(til);
console.log('named function(factorial)=============');

var total23 = function factorial(number){
    if(number<1){
        return 1;
    }
 return number*factorial(number-1);     
}
var til2 = total23(5);
console.log(til2);
console.log('variable expression function');

(function factorial(number){
    if(number<1){
        return 1;
    }
 return console.log('factorial of the given number'+number*factorial(number-1));     
}(5));
console.log('============self invoked function(factorial)-------========');

let fact1 = (number)=>{
    if(number<1){
        return 1;
    }
 return number*factorial(number-1);     
}
var  result = fact1(5);
console.log(result);
console.log('    arrow function    (factorial) ============');


var fibonacci = (p) =>{
    var a = 0;
    var b = 1;
    console.log(a);
    console.log(b);
    var c=0;
    for( var i=0;i<p;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
fibonacci(10);
console.log('arrow function(fibonacci)');


function fibonacci1(no){
    var a = 0;
    var b = 1;
    console.log(a);
    console.log(b);
    var c=0;
    for( var i=0;i<no;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
 var result1=fibonacci1(3);
 console.log(result1);
 console.log('named function (fibonacci)==');

 (function fibonacci1(no){
    var a = 0;
    var b = 1;
    console.log(a);
    console.log(b);
    var c=0;
    for( var i=0;i<no;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}(10));
 console.log('========================')



 var add12 = function fibonacci2(no1){
    var a = 0;
    var b = 1;
    console.log(a);
    console.log(b);
    var c=0;
    for( var i=0;i<no1;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
 }
var result2 = add12(7);
console.log(result2);
console.log('variable expression function');




function isPrime(number1){
    if(number1<=1){
        console.log('not a prime');
    }
    if(number1===2){
        console.log(' is prime');
    }
    for(var i=2;i<number1/2;i++){
        if(number1%i === 0){
            return 'is not a prime';
        }
      }
      console.log('is a prime')
    }
var res3 = isPrime(20);
console.log(res3);
console.log('prime numbers');

var total = function isPrime(nu){
    if(nu<=1){
        console.log('not a prime');
    }
    if(nu===2){
        console.log(' is prime');
    }
    for(var i=2;i<nu/2;i++){
        if(nu%i === 0){
            return 'is not aprime';
        }
      }
      console.log('is  a prime')
    }
console.log(total(7));
console.log('prime numbers==============');

var total =  (nu)=>{
    if(nu<=1){
        console.log('not a prime');
    }
    if(nu===2){
        console.log(' is prime');
    }
    for(var i=2;i<nu/2;i++){
        if(nu%i === 0){
            return 'is not aprime';
        }
      }
      console.log('is  a prime')
    }
console.log(total(7));
console.log('prime  numbers')

function circumference(r){
    return Math.PI*2*r;
}
var ans = circumference(4);
console.log('circumference of the circle is '+ans);
console.log('=============circle======');


(function circumference(r){
    return console.log('circumference of the circle ', Math.PI*2*r);
}(4));

console.log('===========================');

var circle=function circumference1(r){
    return Math.PI*2*r;
}
var ans1 = circle(2);
console.log('circumference of the circle is '+ans1);
console.log('=============vARIABLE EXPRESSION FUNCTION(CIRCLE)======');


var circle=(r)=>{
    return Math.PI*2*r;
}
var ans1 = circle(17);
console.log('circumference of the circle is '+ans1);
console.log('=============ARROW FUNCTION(CIRCLE)======');

var array = [10,20,30,40,50];
var addition =0;
function add(){
for( var i=0;i<array.length;i++){
    addition+=array[i];
}
    return addition;
}
console.log(add());
console.log('named function');

var addition1=0;
var resu = function add1(){
    for( var i=0;i<array.length;i++){
        addition1+=array[i];
    }
        return addition1;        
    
}
console.log(resu());
console.log('variable expression function');

var addition2 = 0;
var resu =  ()=>{
    for( var i=0;i<array.length;i++){
        addition2+=array[i];
    }
        return addition2;
    
}
console.log(resu());
console.log('arrow function=');

var addition3=0;
(function add2(){
    for( var i=0;i<array.length;i++){
        addition3+=array[i];
    }
        return console.log(addition3);        
    }());
console.log('self invoked functions');

















