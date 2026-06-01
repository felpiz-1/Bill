const elemento = {
    email: document.querySelector("#email"),
    senha: document.querySelector("#senha"),
    form: document.querySelector("form"),
    button: document.querySelector("button"),
};

const dadosDigitados = {
    email: "",
    senha: "",
}

elemento.form.addEventListener('submit', (event)=>{
    event.preventDefault();
    getDadosDigitados(elemento.email.value, elemento.senha.value);
    
});

function getDadosDigitados(email, senha){
    dadosDigitados.email = email;
    dadosDigitados.senha = senha;
    logarSistema();
};

const usuarioCadastrado = "adm@adm";
const senhaCadastrada = "1234";


function logarSistema(){

if (dadosDigitados.email == usuarioCadastrado && dadosDigitados.senha == senhaCadastrada){
    window.location.replace('sistemapro.html')
}
else if(dadosDigitados.email !== usuarioCadastrado){
    alert("Usuario não encontrado.");
}

else if(dadosDigitados.senha !== senhaCadastrada){
    alert("Senha incorreta!")
}
};

