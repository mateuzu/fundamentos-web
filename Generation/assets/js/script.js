/*
Case Sensitive = Reconhece letras minusculas e maisculas para as palavras reservadas

Formas de acessos ao DOM (Manipular elementos HTML)
    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email"); //acessando o DOM com o querySelector é necessário informar o caractere reservado: #id e .classe
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = '100%'; //Estilizando o elemento através do JavaScript
email.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) { //Testando se o valor presente na variavel nome (nome.value.length verifica o tamanho da variavel) é menor que 3
        txtNome.innerHTML = "Nome inválido"; //innerHTML = atribui um valor para o elemento 
        txtNome.style.color = "red";
    } else {
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
   let txtEmail = document.querySelector("#txtEmail");
//email.value.indexOf('x') = verifica se existe o caractere informado entre () no valor da variável. Caso exista, retorna o valor 1, se não, retorna o valor -1
   if(email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) { //Testando se o valor da variavel email NÃO possui (pois a condição é comparada ao valor -1) os caracteres @ e o .
        txtEmail.innerHTML = "E-mail inválido!";
        txtEmail.style.color = "red";
   } else {
        txtEmail.innerHTML = "E-mail válido!";
        txtEmail.style.color = "green";
        emailOk = true;
   }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto");
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Quantidade de caracteres excedida! Digite no máximo 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block"; //bloqueando a exibição da mensagem de erro caso o limite de caracteres seja excedido
    } else {
        txtAssunto.style.display = "none"; //retirando a exibição caso o texto esteja dentro do limite de caracteres
        assuntoOk = true;
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Preencha o formulário corretamente antes de enviar!");
    }
}

function mapaZoom(){
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal(){
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}

function escuro(){
    const body = document.body;
    body.classList.toggle("dark-mode"); //chamando a classe CSS .dark-mode para a função
}
