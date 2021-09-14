const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

let validUsername = false
let validEmail = false
let validPassword = false
let validPassword2 = false

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
    isValid()
})

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

username.addEventListener('keyup', () =>{

    if(username.value.length < 6 || username.value.length == ''){
        setErrorFor(username, 'Usuario deve possuir no mínimo 6 caracteres!')
    } else{
        setSuccessFor(username)
        validUsername = true
    }
})

username.addEventListener('blur', () =>{

    if(username.value === ''){
        setErrorFor(username, 'Usuário não pode ser vazio!')
    }
})

email.addEventListener('keyup', () =>{
    if(!isEmail(email.value)){
        setErrorFor(email, 'Digite um email válido!')
    }else{
        setSuccessFor(email)
        validEmail = true
    }
})

email.addEventListener('blur', () =>{

    if(email.value === ''){
        setErrorFor(email, 'Email não pode ser vazio!')
    }
})

password.addEventListener('keyup', () =>{

    if(password.value.length < 7){
        setErrorFor(password, 'Senha deve ter no mínimo 8 caracteres!')
    }else{
        setSuccessFor(password)
        validPassword = true
    }
})

password.addEventListener('blur', () =>{

    if(password.value === ''){
        setErrorFor(password, 'Senha não pode ser vazia!')
    }
})

password2.addEventListener('keyup', () =>{

    if(password2.value != password.value){
        setErrorFor(password2, 'Senhas não correspondem!')
    }
    else{
        setSuccessFor(password2)
        validPassword2 = true
    }
})

password2.addEventListener('blur', () =>{

    if(password2.value === ''){
        setErrorFor(password2, 'Senha não pode ser vazia!')
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

