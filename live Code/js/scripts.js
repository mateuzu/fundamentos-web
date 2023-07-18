function helloWorld(){
    alert("Hello World");
}

/*
    Escopo = Abertura e fechamento de chaves de uma função

    TIPOS DE VARIÁVEIS:
    VAR = Escopo Global (A variavel pode ser acessada em qualquer lugar do código)
    LET = Escopo Local (A variavel só pode ser acessada somente dentro do escopo onde foi declarada - OBS: Ao declarar diratemente dentro do arquivo ela pode ser acessada em qualquer lugar)
    CONST = Constante - valor não mutável | Escopo Global (A constante pode ser acessada em qualquer lugar do código)
*/

let nome = document.getElementById("nome"); // Variavel nome acessa o objeto Document para acessar os elementos HTML, nesse caso, utilizando o método getElementById para buscar um elemento HTML com o Id informado

//Criando uma função para retornar um pop up com o valor presente na variavel nome
function enviar(){
    alert("Olá " + nome.value); //nome.value = retorna o valor presente na variavel
}