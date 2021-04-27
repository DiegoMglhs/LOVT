// console.log("Js Funciona!");
// console.log(document)
// alert("chega!");

// let adulto = confirm('tem mais de 18 anos?');

let nomeUsuario = prompt("qual seu nome?");

// console.log(nomeUsuario);
let elementHeader = document.querySelector('.olaUsuario');

// elementHeader.innerText = `Olá, ${nomeUsuario}`;

elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = 'orange';

const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
}

setTimeout(() => {
    document.querySelector('.modal').style.display = "flex";
}, 5000)

const btnClose = () => {
    document.querySelector('.modal').style.display = "none";
}
// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault(); // cancelando o envio temporariamente

//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;

//     console.log(nomeValue);
//     console.log(emailValue);
//     //validação dos campos
//     //exibição de mensagem de erros
//     //envio do formulário

// });

let formContact = document.querySelector("#form_contact");

formContact.addEventListener("submit", (evento) =>{

    let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let telefoneValue = document.querySelector("#input_telefone").value;
    let respostaError = document.getElementById('error_form');

    function validarEmail(email) {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    if(!nomeValue.length || !emailValue.length || !telefoneValue.length){
        respostaError.innerText = "Preencha todos os Campos";
        error_form.style.color = 'red';
        evento.preventDefault();
    }else if(nomeValue.length<2){
        respostaError.innerText = "Nome deve conter ao menos 2 caracteres";
        error_form.style.color = 'red';
        input_nome.style.border = 'solid red';
        evento.preventDefault();
    }else if(!validarEmail(emailValue)){
        respostaError.innerText = "Informe um email válido";
        error_form.style.color = 'red';
        input_email.style.border = 'solid red';
        evento.preventDefault();
    }else if(telefoneValue.length<8){
        respostaError.innerText = "Informe um Telefone válido";
        error_form.style.color = 'red';
        input_telefone.style.border = 'solid red';
        evento.preventDefault();
    }else{
        formContact.submit();
    }

})