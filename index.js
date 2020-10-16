`let loginBTN = document.getElementById("thanhvien");
let closeLoginBTN = document.getElementById("close-btn");
let loginbox = document.getElementById("login-box");

loginBTN.onclick = function() {openLogin()};
closeLoginBTN.onclick = function() {closeLogin()};

function openLogin() {
    loginbox.style.display = "block";
}

function closeLogin() {
    loginbox.style.display = "none";
    user.placeholder = "";
    pass.placeholder = "";
}

//--------------------------------------------------------------------------------------------
// login 
let login = document.getElementById("login-btn");
let user = document.getElementById("username");
let pass = document.getElementById("password");
let name = document.getElementById("user");

login.onclick = function() {logged()};
function logged() 
{   
    if(user.value == "") 
    {
        user.focus();
    } 
    else if (pass.value == "") 
    {
        pass.focus();
    } 
    else 
    {
        closeLogin();
        alert("Đăng nhập thành công");
    }
}