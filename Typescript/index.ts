let myName = 'Revanth';
console.log(myName);
// alert(myName);
let company;
company = 'testyantra';
company = 23;
console.log(company);  
                    
let student :number| string;
student = 21;
student = 'Revanth';
console.log(student);
let myArray :string[]=['dkhsffa','bhanu'];
console.log(myArray);
let mytuple:[string,number,boolean]=['',234,true];
console.log(mytuple);
enum colors{
    red = 'danger',
    black = 'info',
    white = '',
    green = '',
}
console.log(colors.green);
console.log('====--------=====');
// class Person{
//     name:string; ;
//     age :number; 
//     constructor(personName:string,personAge:number){
//         this.name = personName;
//         this.age = personAge;
//     }
// }
// let person = new Person('revanth',21);
// console.log(person.name);
// class Person{
//     constructor( public personName:string,public personAge:number){
//     }
// }
// let person = new Person('rajinikanth',34);
// console.log(person.personAge);
// class Car{
//     brand:string = 'BMW';
//     static model:string = 'x5';
// }
// let c1 = new Car();
// console.log(c1.brand);

// console.log(Car.model);
 
// class Car{
//     constructor(public brand:string,public model:string){

//     }
// }
// let c1  = new Car('BMW','X5');
// console.log(c1.brand);
// let c2 = new Car('ducatti','gr34');
// console.log(c2.brand);

// let c3: Car = {
//     brand : 'Benz',
//     model : 'c002',
// }
// class Person{
//     constructor(public name:string,public age:number){

//     }
// }
// class Student extends Person{
//     constructor(public myName:string,public myAge:number,public usn:number){
//         super(myName,usn);
//     }
// }
// let person1 = new Person('revanth',21);
// let student1 = new Student('hari',21,9515544499);
// console.log(person1.name);
// console.log(student1.usn);

// console.log(student1.name);
// console.log(student1.myName);
// class Person{
//     constructor(public name:string,public age:number, public degree?:string){}
// }
// let person1:Person = {
//     name :'revanth',
//     age : 21,
// }
// let person2:Person = {
//     name :'hari',
//     age :18,
//     degree:'civil engineering',
// } //object creations using blueprint as a class.
// interface Student{
//     name:string;
//     age:number;
//     printDetails():void;
// }
// class Person implements Student{
//     name = 'revanth';
//     age = 21;
//     printDetails(){
//         console.log('my name is ',this.name);
//     }
// }
// let person1 = new Person();
// console.log('my name is ',person1.name);
// person1.printDetails();
// let student1:Student = {
//     name:'hari',
//     age:18,
//     printDetails :() => {
//         console.log('my brother name is '+student1.name);
//     }
// }
// console.log(student1.name);
// student1.printDetails();

//  function getArray<p>(items:[]){
//      return new Array<p>().concat(items);
//  }
// let strArray = getArray<string>(['chair','table','spoons']);
// let numArray = getArray<number>([123,345,678]);
// numArray.push(23);
 
// /// <reference path="./circle.ts" />
// ///<reference path="./rectangle.ts" />
// MathOperations.Circle.areaOfCircle(20);
// MathOperations.Rectangle.areaOfReactangle(2,4);










