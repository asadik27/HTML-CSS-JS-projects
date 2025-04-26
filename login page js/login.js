const loginForm=document.getElementById('loginForm')
loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value.trim();

    const storedUser=
    JSON.parse(localStorage.getItem('user'));
    if(!storedUser){
        alert("user not found, register first ");
        window.location.href="register.html";
        return
    }
    if(email === storedUser.email && password === storedUser.password){
        alert("login successed")
        window.location.href="index.html"
    }else{
        alert("incorrect email or password")
    }

})