function validateForm(){
    let formData  = document.forms[0];
let userN  ame = formData.unm.value;
let password = formData.psd.value;
if(userName.length>4 && password.length>7){
    console.log('success');
    formData.unm.style.border='2px solid green';
    formData.loginsubmit.disabled = 'false';
}else{
    formData.unm.style.border = '3px solid red';
}
}
