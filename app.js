const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

    username.addEventListener('keypress', () =>{

        if(username.value.length < 6){
            setErrorFor(username, 'Usuario deve possuir mais de 6 caracteres!')
        } else{
            setSuccessFor(username)
        }
    })

    username.addEventListener('blur', () =>{

        if(username.value === ''){
            setErrorFor(username, 'Usuário não pode ser vazio!')
        }
    })

    email.addEventListener('keypress', () =>{
        if(!isEmail(email.value)){
            setErrorFor(email, 'Email inválido!')
        }else{
            setSuccessFor(email)
        }
    })

    email.addEventListener('blur', () =>{

        if(email.value === ''){
            setErrorFor(email, 'Email não pode ser vazio!')
        }
    })

    password.addEventListener('keypress', () =>{

        if(password.value.length < 7){
            setErrorFor(password, 'Senha deve ter no mínimo 8 caracteres!')
        }else{
            setSuccessFor(password)
        }
    })

    password.addEventListener('blur', () =>{

        if(password.value === ''){
            setErrorFor(password, 'Senha não pode ser vazia!')
        }
    })

    password2.addEventListener('keypress', () =>{

        if(password2.value.length < 7){
            setErrorFor(password2, 'Senha deve ter no mínimo 8 caracteres!')
        }else{
            setSuccessFor(password2)
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

