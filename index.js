function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = 'pages/home/home.html'
        console.log('success', response)
    }).catch(error => {
        alert(getErrorMessage(error))
        console.log('error', error)
    })
}

function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário não encontrado"
    }
    return error.message
}

function register() {
    showLoading();
    // window.location.href = 'pages/register/register.html'
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false
    }
    return validarEmail(email);
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailObrigatorioError().style.display = email ? "none" : "block";

    form.emailInvalidoError().style.display = validarEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.senhaObrigatoriaError().style.display = password ? "none" : "block"
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recuperarSenhaBotao().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true
}



const form = {
    email: () => document.getElementById('email'),
    emailInvalidoError: () => document.getElementById('email-invalido-error'),
    emailObrigatorioError: () => document.getElementById('email-obrigatorio-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    senhaObrigatoriaError: () => document.getElementById('senha-obrigatoria-error'),
    recuperarSenhaBotao: () => document.getElementById('recuperar-senha-botao'),
}