function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent= '';

if (name === ''){
    errorMessage.textContent='Por favor, insira seu nome.';
    return false;
}
if (email === ''){
    errorMessage.textContent='Por favor, insira seu email.';
    return false;
}
if (password === ''){
    errorMessage.textContent='Por favor, insira seu senha.';
    return false;
}
if (password !== confirmPassword){
    errorMessage.textContent='As senhas não coincidem.';
    return false;
}
return true;
}

