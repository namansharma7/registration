
function validate(){
    var name1=document.getElementById('name').value;
    var name2 = document.getElementById('name2').value;
    var pwd1=document.getElementById('pwd1').value;
    var pwd2=document.getElementById('pwd2').value;
    var email=document.getElementById('email').value;
    var add = document.getElementById('address').value;
    var hob1 = document.getElementById('mat1');
    var hob2 = document.getElementById('mat2');
    var hob3 = document.getElementById('mat3');
    
    
    if(name1=="" || name2=="" || pwd1=="" || pwd2=="" || email==""){
        if(name1 != ""){

        }else{
            document.getElementById('name').style.border="2px solid red";
            //document.getElementById('name').focus();
            document.getElementById('ename').innerHTML ="This field is mandatory";
           // return false;
        }
        if(name2 != ""){
    
        }else{
            //document.getElementById('name2').focus();
            document.getElementById('name2').style.border="2px solid red";
            document.getElementById('ename2').innerHTML = "This field is mandatory";
            //return false;
        }
        if(pwd1 != ""){
    
        }else{
           // document.getElementById('pwd1').focus();
            document.getElementById('pwd1').style.border="2px solid red";
            document.getElementById('epwd1').innerHTML = "This field is mandatory";
            //return false;
        }
        if(pwd2 != ""){

        }else{
           // document.getElementById('pwd2').focus();
            document.getElementById('pwd2').style.border="2px solid red";
            document.getElementById('epwd2').innerHTML ="This field is mandatory";
            //return false;
        }
        if(email != ""){

        }else{
            document.getElementById('email').style.border="2px solid red";
            document.getElementById('emails').innerHTML = "This field is mandatory";
        }
        if(add != ""){

        }else{
            document.getElementById("address").style.border = "2px solid red";
            document.getElementById('add').innerHTML = "This field is mandatory";
        }
        if(hob1.checked==true || hob2.checked==true || hob3.checked==true){
            document.getElementById('cri').innerHTML = "";
        }else{
            document.getElementById('cri').innerHTML = "This field is mandatory";
            
        }
        
        return false;
    }
    
}
function valName(txtid,error){
    var regex = /^[A-Za-z]+$/;
    var name = document.getElementById(txtid).value;
    if(regex.test(name)){
         if((name.length >2) && (name.length<30)){
            document.getElementById(txtid).style.border = "2px solid green";
            document.getElementById(error).innerHTML = ""; 
            return true;
        }else{
            document.getElementById(txtid).style.border = "2px solid red";
            document.getElementById(error).innerHTML = "Length 2-30"; 
            return false;
        }
    }else if(name==""){
        document.getElementById(txtid).style.border="2px solid red";
        document.getElementById(error).innerHTML = "This field is Mandotary";
        return false;
    }else{
        document.getElementById(txtid).style.border = "2px solid red";
        document.getElementById(error).innerHTML = "Special no allowed";
    }
}
function valPwd1(pwdid,err){
    var pass = document.getElementById(pwdid).value;
    var regexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    
    if(regexp.test(pass)){
        document.getElementById(pwdid).style.border = "2px solid green";
        document.getElementById(err).innerHTML = "";
        return true;
    }else{
        document.getElementById(pwdid).style.border = "2px solid red";
        document.getElementById(err).innerHTML = "must have 1U 1L 1s 8-10";
        return false;
    }
    
}
function valPwd2(pwdid,pwd1,err){
    var pwd = document.getElementById(pwdid).value;
    var pwd1 = document.getElementById(pwd1).value;
    if(pwd==pwd1){
        document.getElementById(pwdid).style.border = "2px solid green";
        document.getElementById(err).innerHTML = "";
        return true;
    }else{
        document.getElementById(pwdid).style.border = "2px solid red";
        document.getElementById(err).innerHTML = "pwd not matching";
        return false;
    }
}
function valemail(email,err){
    var mail = document.getElementById(email).value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regex.test(mail)){
        document.getElementById(email).style.border = "2px solid green";
        document.getElementById(err).innerHTML = "";
        return true;
    }else{
        document.getElementById(email).style.border = "2px solid red";
        document.getElementById(err).innerHTML = "incorrect format";
        return false;
    }
}
function valhob(){
    var hob1 = document.getElementById('mat1');
    var hob2 = document.getElementById('mat2');
    var hob3 = document.getElementById('mat3');
    if(hob1.checked==true || hob2.checked==true || hob3.checked==true){
        document.getElementById('cri').innerHTML = "";
    }else{
        document.getElementById('cri').innerHTML = "This field is mmlk mandatory";
    }
}
function valadd(){
    var ad = document.getElementById('address').value;
    if(ad != ""){
        document.getElementById('add').innerHTML = "";
    }else{
        document.getElementById('add').innerHTML = "This field is mandatory";
    }
}


  
