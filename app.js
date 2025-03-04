//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let jogoSorteado = false; //Variável para controlar se o sorteio já foi feito

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    console.log("Valor digitado:", inputAmigo.value);//Mostra o valor inserido
    let nome = inputAmigo.value.trim();

    if (jogoSorteado){
        alert("O jogo já foi sorteado. Reinicie para adicionar novos nomes!");
        return;
    }
//Verifica se o nome está vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido");
        return;
    }

//Verifica se o nome contém apenas letras e espaços
    let regexNome = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (regexNome.test(nome)){
       alert("Por favor, insira um nome válido");
     return;
   }  

//Adiciona o nome na lista (evita duplicatas)
    if (!amigos.includes(nome)){
        amigos.push(nome);
        atualizarLista();
    } else{
        alert("Este nome já foi adicionado!");
    }
    inputAmigo.value = "";//Limpa o campo de entrada
     }
    

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //Esse comando irá limpar a lista antes de atualizar

    amigos.forEach(nome => {
        let novoItem = document.createElement("li");
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    });
}


function sortearAmigo() {

// Comentei essa condição para permitir que o jogo podesse ser sorteado várias vezes sem precisar reiniciar o jogo
//    if (jogoSorteado) {
//        alert ("O jogo já foi sorteado. Reinicie para sortear novamente!");
//        return;
//    }
    
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> O Amigo sorteado é: <strong>${sorteado}</strong></li>`;

//Bloqueia o botão adicionar após o jogo
    jogoSorteado = true;
    botaoAdicionar.disabled = true;
    botaoSortear.disabled = true;
}


function reiniciarJogo() {
    let botaoAdicionar = document.querySelector(".button-add");
    let listaAmigos = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
    let botaoSortear = document.querySelector(".button-draw");

// Limpar tudo
    amigos = [];
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    jogoSorteado = false;
    botaoAdicionar.disabled = false; // Reativa o botão Adicionar
    botaoSortear.disabled = false;// Reativa o botão sortear
}
