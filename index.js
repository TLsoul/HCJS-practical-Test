let id = (id) => document.getElementById(id);
let classes =(classes) =>document.getElementsByClassName(classes);

let fullname = id("fullname"),
    phonenumber = id("phonenumber"),
    selectjobtype = id("selectjobtype"),
    password = id("password"),
    email = id("email"),
    repeatpassword = id("repeatpassword"),
    errorMsg = classes("error"),
    successIcon=classes("success-icon"),
    failureIcon = classes("failure-icon");
form.addEventListener("submit",(e) =>{
    e.preventDefault(); //callback() trong js
    engine(fullname,0,"Fullname cannot be blank!");
    engine(email,1,"Email cannot be blank!");
    engine(selectjobtype,2,"Select job type cannot be blank!");
    engine(password,4,"Password cannot be blank!");
    engine(phonenumber,3,"Phonenumber cannot be blank!");
    engine(repeatpassword,5,"Password cannot be blank!");
});

let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border ="2px solid red";
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
};