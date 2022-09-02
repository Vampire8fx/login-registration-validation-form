const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),          
      loader=document.querySelector("preloader");

    //js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type==="password"){
                    pwField.type = "text";
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })
    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
    });
   
function store(inputText)
{
    var   fname=document.getElementById('fname').value;
 var   lname=document.getElementById('lname').value
 var    pn=document.getElementById('phone').value;
  var  email=document.getElementById('email').value;
  var  pw=document.getElementById('pw').value;
  var   cmpw=document.getElementById('cmpw').value;
 // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/*var   firstname=document.myForm.fname.value;
var   lastname=document.myForm.lname.value
var   pn=document.myForm.phone.value;
var   email=document.myForm.email.value;
var   pw=document.myForm.pw.value;
var   cmpw=document.myForm.cmpw.value;*/

  
     if (fname == "") {
        alert("please enter firstname")
        return false;
}
     if (lname == "") {
        alert("please enter lastname")
        return false;
    }
     if (pn.length < 9 || pn.length > 11) {
        alert("enter valid mobile number")
        return false;
    }
     if (pw.length <= 8) {
        alert("**Password length must be atleast 8 characters")
        return false;
    }
      if (pw.length >= 12) {
        alert("**Password length must not exceed 15 characters")
        return false;
    }
     if(pw != cmpw){
        alert("password and comfirm password not matched"); 
        return false; 
   }
   if (email!="") {
         if(inputText.value.match(mailformat))
    {
        
        document.form1.text1.focus();
        return true;
    }
        else
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
    alert("enter email address!")
    }
    
   
    else{
        //alert("plz enter valid email address")
        login.addEventListener("click",( )=>{
        container.classList.remove("active"); });
}


}
          
    function savedata(){
var   firstname=document.getElementById('fname').value;
 var   lastname=document.getElementById('lname').value
 var    pn=document.getElementById('phone').value;
  var  email=document.getElementById('email').value;
  var  pw=document.getElementById('pw').value;
  var   cmpw=document.getElementById('cmpw').value;

         let savedata = new Array();
 savedata = JSON.parse(localStorage.getItem("user_details")) || []
if (savedata.some((v) => { return v.email == email })) {
        alert("this email address is already register.")
    }
else{
    console.log("come here")
    savedata.push({
        "fname":firstname,
        "lname":lastname,
        "pn":pn,
        "email":email,
        "pw":pw,
        "cmpw":cmpw})
        localStorage.setItem("user_details", JSON.stringify(savedata))
        console.log(savedata);    
        
        alert("successfully register");
        return true;
      }
         document.getElementById("preloader").style.display="block";
         setTimeout("hide()",500); 
    }
      
     function validate(){

    var email1=document.getElementById('email1').value;
    var pw1=document.getElementById('pw1').value;
    if (email1=="" && pw1=="") {
       alert("enter email and password"); 
    }

else if (email1=="" && pw1!="") {       
    alert("enter email");

   }    
else if (email1 != "" || pw1!="") {
    let user_records = new Array();
    user_records= JSON.parse(window.localStorage.getItem("user_details"));   
    if (user_records.some((v) => { return v.email == email1 && v.pw == pw1 })) {   
       alert("login successfull!!");
        let current_user = user_records.filter((v) => { return v.email == email1 && v.pw == pw1 })[0]
        localStorage.setItem('firstname', current_user.fname);
        localStorage.setItem('lastname', current_user.lname);
        window.location.href = "./index.html";
       }
        else {
     alert("Please enter correct details!!");
   }
}
document.getElementById("preloader").style.display="block";
        setTimeout("hide()",500);
  }     
function hide() {
    document.getElementById("preloader").style.display="none";
}

