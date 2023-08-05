function submitHandeler(){
    let name=document.getElementById('name').value
    let phone=document.getElementById('number').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

    localStorage.setItem("name", name);
    localStorage.setItem("number", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    
}