const messageButtonId = "#messageButton";
const messageHolderId = "#messageHolder";
const button = document.querySelector(messageButtonId);
const messageHolder = document.querySelector(messageHolderId);
const message = "Olá, seja bem vindo ao meu trabalho avaliativo da disciplina de Fundamentos de Desenvolvimento de Softwares.";

// (javascript) Quando o usuário clicar, uma mensagem (por exemplo uma frase de 
// motivação, saudação, boas vindas, etc.) deverá aparecer ABAIXO DO BOTÃO. 

button.addEventListener("click",showMessage);

// eu usei um alert aqui, mas percebi que estava desviando da proposta.
// então comenteio o código porque gostei dele, e fiz o script alterar um
// parágrafo
/*
function showMessage(){
    alert(message);
}
*/   

function showMessage(){
    messageHolder.innerHTML = message;
    messageHolder.style.background = "rgb(196, 196, 196)";
    messageHolder.style.color = "rgb(35, 35, 35)";
}

