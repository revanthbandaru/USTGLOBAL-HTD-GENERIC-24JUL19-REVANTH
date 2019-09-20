var student= new Object();
student.name='revanth';
student.id='qw235u';
student.age=21;
student.course='ECE';
student.mobileno=9515544499;
console.log(student);
console.log("===new keyword object 1====");

var glue = new Object();
glue.name = 'prabhas';
glue.age = 34;
glue.email = 'revanthsteyn@gmail.com';
console.log('my name is'+glue.name);
console.log('my age is '+glue.age);
console.log('my email is '+glue.email);
console.log(glue);
console.log('====new keyword object 2=======');

var revo = new Object();
revo.name = 'revanth';
revo.no   =9515544499;
var name = revo.name;
console.log("my name is "+name);
var num = revo.no;
console.log("my number is "+num);
console.log('=new keyword==-object= 3-==');

var fourArms= new Object();
fourArms.name = 'fourarms';
fourArms.age = 56;
fourArms.strength = 'rock smash';
console.log('alien name is '+fourArms.name);
console.log('alien age is '+fourArms.age);
console.log('alien strength is '+fourArms.strength);
console.log('new keyword object =4===');

var employee = new Object();
employee.name = 'sharukh';
employee.age= 34;
employee.email = 'sharukh1234@gmail.com';
var name1 = employee.name;
console.log('hero name is '+name1);
var age1 = employee.age;
console.log('hero age is '+age1);
var email = employee.email;
console.log('hero email is '+email);
console.log('new key word object= 5 ============');

var student=['revanth','qw235u',21,'ECE',9515544499];
for(var i=0;i<student.length;i++)
{
    console.log(student[i]);
}
console.log('====array 1======');

var aliens = ['fourarms','wildmut','exellarator','sting fly'];
aliens[4]='asmuth';
for(var i=0;i<aliens.length;i++){
    console.log('aliens in ben 10 are '+aliens[i]);
}
console.log('array 2=============');

var animals = ['hyna','lion','cheetha','tiger','leopard'];
for(var i=0;i<aliens.length;i++){
    console.log('different animals are '+animals[i]);
}
console.log('==---array 3==========');

var things = ['chair','tables','desks'];
for(var i=0;i<things.length;i++){
    console.log('different things are '+things[i]);
}
console.log('=array 4=========');

var students = ['revanth','harinath','loknath','rajitha'];
for(var i=0;i<students.length;i++){
    console.log('different students are '+students[i]);
}
console.log('=========array 5=========');


var student={
    firstName:'revanth',
    lastName:'kumar',
    id  :'qw235u',
    age  :21,
    course :'ECE',
    mobileno:9515544499,
    getName: function(){
        return this.firstName+' '+this.lastName;
    }
}
console.log( "my name is"+student.firstName);
console.log("my full name is "+student.getName());
console.log(' with out new keyword object 1==============');

var hod={
    firstName:'murali',
    lastName:'kumar',
    age  :39,
    course :'ECE',
    mobileno:9578544499,
    getName: function(){
        return this.firstName+' '+this.lastName;
    }
}
console.log('first name is '+hod.firstName);
console.log( "hod sir name is "+hod.firstName);
console.log("hod sir full name is "+hod.getName());
console.log(' with out new keyword object 2==============');

var electrical={
    firstName:'hemanth',
    lastName:'kumar',
    age  :41,
    course :'EEE',
    mobileno:9578577799,
    getName: function(){
        return this.firstName+' '+this.lastName;
    }
}
console.log(' electrical hod age is '+electrical.age);
console.log('first name is '+electrical.firstName);
console.log( "hod sir name is "+electrical.firstName);
console.log("hod sir full name is "+electrical.getName());
console.log(' with out new keyword object 3==============');

var technology = {
    name : 'jspiders',
    doings : ['biting','eating','wallwalk'],
    getN :function(){
        return this.name;
    }
}
console.log('reptiles name is '+technology.getN());
console.log('object without new keyword ====4');

var reptiles = {
    name : 'lizard',
    courses : ['html','css','java script','j2EE'],
    getNa :function(){
        return this.name;
    }
}
console.log('name of the reptile is '+reptiles.name);
console.log('institute name is '+reptiles.getNa());
console.log('object without new keyword ====4');


var student1 =new Array('revanth','qw235u',21);
student1[4]=9515544499;
student1[5]=null;
for(var i=0;i<student1.length;i++)
{
    console.log(student1[i]);
}
console.log('===new keyword array 1=======');

var hobbies =new Array('palying','','running');
hobbies[1]='jumping';
for(var i=0;i<hobbies.length;i++){
    console.log("hobbies "+hobbies[i]);
}
console.log('===usig new keyword array 2======');

var author = new Array('danbrown','baskerville','sherlock','bound');
author[4] = 'srisri';
for(var i=0;i<author.length;i++){
    console.log('name of the authors '+author[i]);
}
console.log('using newkeyword array 3===========');

var birds = new Array('pigeon','peacock','crow','parrot','hen');
birds[1] = null;
for(var i=0;i<birds.length;i++){
    console.log('different birds are '+birds[i]);
}
console.log('using new keyword array 4=-========');

var birds = new Array('pigeon','peacock','crow','parrot','hen');
birds[1] = null;
for(var i=0;i<birds.length;i++){
    console.log('different birds are '+birds[i]);
}
console.log('using new keyword array 5=-========');


