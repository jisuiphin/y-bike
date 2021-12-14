console.log("Connected");

function SubmitForm(form){
    // var x = prompt("Hello");

    console.log(form.nameN.value);
    console.log(form.emailN.value);
    console.log(form.passwordN.value);
    console.log(form.phoneN.value);
    // console.log(form.checkI.value);
    // console.log(form.checkI.value);
    // console.log(form.)

    if(!validateName(form.nameN.value)){
        return false;
    }

    if(!validateEmail(form.emailN.value)){
        return false;
    }
    
    if(!validatePassword(form.passwordN.value)){
        return false;
    }

    if(!validatePhone(form.phoneN.value)){
        return false;
    }
    
    if(!validateCheck(form.checkI.value)){
        return false;
    }
    // return false;
}

function validateName(data){
    if(data == ""){
        alert("Input your Name")
        return false;
    }
    return true;
}

function validateEmail(data){
    if(data == ""){
        alert("Must Input Email")
        return false;
    }
    return true;
}

function validatePassword(data){
    if(data == ""){
        alert("Must Input Password")
        return false;
    }
    return true;
}

function validatePhone(data){
    if(data == ""){
        alert("Must Input Phone Number")
        return false;
    }
    return true;
}
