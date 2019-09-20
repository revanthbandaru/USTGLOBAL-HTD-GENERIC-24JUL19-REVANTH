let header1 = document.createElement('h1');
header1.textContent = 'this is revanth header 2';
console.log(header1);

let nameElement= document.getElementById('revo');
console.log(nameElement);
nameElement.textContent='this is revanth header';


let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent = 'this is new p tag';

let divElements = document.getElementsByClassName('blue');
console.log(divElements);

let pElements = document.getElementsByTagName('p');
console.log(pElements);



let demoElement = document.querySelector('#demo');
console.log(demoElement);

let blueClassElements = document.querySelectorAll('.blue');
console.log(blueClassElements);

let buttonElement = document.createElement('button');
buttonElement.textContent = 'click me';
console.log(buttonElement);

document.body.appendChild(buttonElement);
let spanEle = document.getElementById('spanId');
    // spanEle.style.color = 'brown';
let buttonElement1= document.getElementById('buttonEle');
buttonElement1.classList = 'add add1';
document.getElementById('tableid').innerHTML=`<table>


<tr>
    <td>Name</td>
    <td>age</td>
</tr>
<tr>
    <td>jhon</td>
    <td>14</td>
</tr>
<tr>
    <td>dinga</td>
    <td>20</td>
</tr>
<tr>
    <td>sourav</td>
    <td>21</td>
</tr>
</table>`;
let reva = document.getElementById('demo1');
// reva.style.color='Blue';
