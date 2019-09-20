function validateForm(){
 let formData  = document.forms[0];
//  console.log(formData.unm.value);
let userName = formData.unm.value;
let password = formData.psd.value;
if(userName.length>4&&password.length>7){
    console.log('success');
    formData.unm.style.border='2px solid green';
    formData.loginsubmit.disabled = 'false';
}else{
    formData.unm.style.border = '3px solid red';
}
}
// function validateForm1(){
//     let formData1  = document.forms[0];
//     //  console.log(formData.unm.value);
//     let password = formData1.psd.value;
//     if(password.length>7){
//         console.log('success');
//         formData1.psd.style.border='2px solid green';
//     }else{
//         formData1.psd.style.border = '3px solid red';
//     }
//     }
    