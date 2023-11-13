function validateFields() {
    const emailValid = isEmailValido();
    document.getElementById('recuperar-senha-botao').disabled = !emailValid;

    const password = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !password
    // Pegar o valor da senha
    // Caso email ou senha, desabilitar botao de login
    // Caso contrário, habilitar botao de login
}

function isEmailValido() {
    const email = document.getElementById('email').value;
    if (!email) {
        return false
    }
    return validarEmail(email);
}

function isPasswordValid () {
    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }
    return true
}

function validarEmail(email) {
    // Expressão regular para validar um endereço de e-mail
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Testar se o e-mail corresponde à expressão regular
    return regex.test(email);
}