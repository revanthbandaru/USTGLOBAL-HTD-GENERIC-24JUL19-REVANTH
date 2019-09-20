function sayHello(){
    alert('Hello');
}
let rebutton =document.getElementById('clickButton');
rebutton.onclick= function(){
    alert("say hello");
}
let createButton = document.getElementById('revo');
createButton.onclick = function(){
    let elem = document.createElement('p');
    elem.textContent = 'this is revanth';
    document.body.appendChild(elem);
}
function createPelement(){
    let pElement = document.createElement('p');
    pElement.textContent='this is p element';
    document.body.appendChild(pElement);
}
let alertElement = document.getElementById('clickButton');
alertElement.addEventListener('click',function(){
    alert("Good Evening");
});
function showText(){
    let inputElement = document.getElementById('showData');
    console.log(inputElement.value);
let h1Element = document.createElement('h1');
h1Element.textContent = inputElement.value;
document.body.appendChild(h1Element);
}