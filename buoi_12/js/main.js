var getElem = function(id){
    return document.getElementById(id);
}
    
function validateForm(){
    let Email = getElem('Email').value;
    let Password = getElem('Password').value;
    kiemTraRong(Email, Password);
    kiemtraEmail(Email);
    kiemTraPassword(Password)
    // handeLogin(Email, Password)
    
}


// kiểm tra rỗng
function kiemTraRong(Email, Password){
    
    
    if(Email ===""){
        getElem('Email-error-message').style.display = "block";
    }else{
        getElem('Email-error-message').style.display = "none";

    }
    if(Password ===""){
        getElem('Password-error-message').style.display = "block";
    }else{
        getElem('Password-error-message').style.display = "none";

    }

}

// kiểm tra email
function kiemtraEmail(Email){
    
    var mailformat = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    if(Email.match(mailformat)){
       return getElem("checkEmail").style.display = "none";
    }else{
       return getElem("checkEmail").style.display = "block";

    }

}

// kiểm tra password

function kiemTraPassword(Password){

    // if(Password.length > 8){
    //     getElem("lenght_pass").style.display = "none";
    // }else{
    //     getElem("lenght_pass").style.display = "block";
    // }

    if(Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        return getElem("lenght_pass").style.display = "none";
        
    }else{
        getElem("lenght_pass").style.display = "block";
       
    }    

}

function handeLogin(){
    let Email = getElem('Email').value;
    let Password = getElem('Password').value;
    if(Email ==="nvtaikma@gmail.com" && Password ==="Tai170402@"){
        alert("đăng nhập thành công");
        return window.location.href = "./index.html";
        // window.location.assign("https://webvn.com/example/vi-du-ve-su-kien-onchange/")
    }else{
        alert("tài khoản mk sai")
    }
}








