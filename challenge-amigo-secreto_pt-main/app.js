//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
        
    validarEntrada()
    console.log(amigos);
    limparNome()
}


function sortearAmigo(){
    let quantidadeNomes = amigos.length;
    //Sortear amigos

    let numeroSorteado = parseInt(Math.random()* quantidadeNomes +1);
    //numeroSorteado
    let nomeSorteado = amigos[numeroSorteado -1];
    console.log(nomeSorteado);
    //console.log(numeroSorteado)

}

function validarEntrada(){
    let nome = document.getElementById("amigo").value;
    if (nome ==""){
        alert("Por favor, insira um nome")
    }else{
        amigos.push(nome)
    }
}

function limparNome(){
    return document.getElementById("amigo").value = "";
}