let btn1 = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");


btn1.onclick = function(){
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}
let name = localStorage.getItem('firstname') ? localStorage.getItem('firstname') : ''
console.log(name);
if (name == '') {
    alert('you need to login first!');
    window.location.href = "./login.html";
}

function logout()
                {
                    if (confirm("log in!")) {
                        window.location.href="./login.html"
                    }else{
                    console.log("come")
                    localStorage.removeItem('firstname');
                    localStorage.removeItem('lastname');
                   alert("logout successfully !!")
                   window.location.href="./index.html";

                   
                    }
                    
                

    
                }
    
