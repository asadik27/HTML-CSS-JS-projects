const registerForm = document.getElementById('registerForm');

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('number').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && email && phoneNumber && password) {
        const user = {
            username,
            email,
            phoneNumber,
            password
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful!');
        window.location.href = "index.html";
    } else {
        alert("Please fill all information correctly!");
    }
});
