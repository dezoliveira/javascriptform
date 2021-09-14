const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

let validUsername = false
let validEmail = false
let validPassword = false
let validPassword2 = false

form.addEventListener('submit', (e) => {
    e.preventDefault()
    isValid()
    checkInputs()
})

username.addEventListener('keyup', () =>{

    if(username.value.length < 6 || username.value === ''){
        setErrorFor(username, 'Usuario deve possuir no mínimo 6 caracteres!')
        validUsername = false
    } else{
        setSuccessFor(username)
        validUsername = true
    }
})

username.addEventListener('blur', () =>{

    if(username.value === ''){
        setErrorFor(username, 'Usuário não pode ser vazio!')
        validUsername = false
    }
})

email.addEventListener('keyup', () =>{
    if(!isEmail(email.value) || email.value === ''){
        setErrorFor(email, 'Digite um email válido!')
        validEmail = false
    }else{
        setSuccessFor(email)
        validEmail = true
    }
})

email.addEventListener('blur', () =>{

    if(email.value === ''){
        setErrorFor(email, 'Email não pode ser vazio!')
        validEmail = false
    }
})

password.addEventListener('keyup', () =>{

    if(password.value.length < 8 || password.value === ''){
        setErrorFor(password, 'Senha deve ter no mínimo 8 caracteres!')
        validPassword = false
    }else{
        setSuccessFor(password)
        validPassword = true
    }
})

password.addEventListener('blur', () =>{

    if(password.value === ''){
        setErrorFor(password, 'Senha não pode ser vazia!')
        validPassword = false
    }
})

password2.addEventListener('keyup', () =>{

    if(password2.value != password.value || password2.value === ''){
        setErrorFor(password2, 'Senhas não correspondem!')
        validPassword2 = false
    }
    else{
        setSuccessFor(password2)
        validPassword2 = true
    }
})

function checkInputs(){
    //Dá um get nos inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === ''){
        setErrorFor(username, 'Usuário não pode ser vazio!')
    } else{
        setSuccessFor(username)
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email não pode ser vazio!')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email não é valido!')
    } else{
        setSuccessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Senha não pode ser vazia!')
    }else{
        setSuccessFor(password)
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Senha não pode ser vazia!')
    }
    
    else if(passwordValue !== password2Value){
        setErrorFor(password2, 'As senhas não correspondem!')
    }

    else{
        setSuccessFor(password2) 
    }
}

password2.addEventListener('blur', () =>{

    if(password2.value === ''){
        setErrorFor(password2, 'Senha não pode ser vazia!')
        validPassword2 = false
    }
})

function isValid(){
    if(validUsername && validEmail && validPassword && validPassword2){
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Enviado com sucesso!'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() =>{
            window.location.reload()
        }, 2000)
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Erro ao cadastrar!'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement //.form-control
    const small = formControl.querySelector('small')
    //Adiciona a mensagem de erro dentro do small text
    small.innerText = message

    //Adiciona a classe do erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement 
    formControl.className = 'form-control success'
}

//Regex
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

