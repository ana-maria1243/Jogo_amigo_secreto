//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let amigosSorteados = []

function adicionarAmigo(){      
    validarEntrada()
    //console.log(amigos);
    limparNome()
}

//Sorteia amigo
function sortearAmigo(){
    if (amigos.length == "0"){
        alert("A lista esta vazia, nao consigo sortear!!!")
    }else{
        let quantidadeNomes = amigos.length;
        let numeroSorteado = parseInt(Math.random()* quantidadeNomes +1);
        let nomeSorteado = amigos[numeroSorteado -1];
        console.log(nomeSorteado);
        //console.log(numeroSorteado)
        amigosSorteados.push(nomeSorteado);
        exibirResultado();

    }
    

}

function validarEntrada(){
    let nome = document.getElementById("amigo").value;
    if (nome ==""){
        alert("Por favor, insira um nome")
    }else{
        amigos.push(nome)
        exibirLista()
    }
}

function exibirLista(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i =0; i< amigos.length; i++){
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        //console.log(itemLista);
        //Incorporando a tag na lista
        lista.appendChild(itemLista);

    }
   
}

function exibirResultado(){
    let listaNomes = document.getElementById("resultado");
    listaNomes.innerHTML = "";

    for (let i =0; i < amigosSorteados.length;i++){
        let itemListaNomesSorteados = document.createElement("li");
        itemListaNomesSorteados.textContent = amigosSorteados[i];

        listaNomes.appendChild(itemListaNomesSorteados);
    }
}

function limparNome(){
    return document.getElementById("amigo").value = "";
}