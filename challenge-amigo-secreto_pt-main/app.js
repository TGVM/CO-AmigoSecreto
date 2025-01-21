//Variáveis
let amigos = [];




/*
Adicionar nomes: Os usuários escreverão o nome 
de um amigo em um campo de texto e o adicionarão
a uma lista visível ao clicar em "Adicionar".
*/
function AdicionarAmigo(){
    let novoAmigo = document.getElementById("amigo").value;
    /*
    Validar entrada: Se o campo de texto estiver 
    vazio, o programa exibirá um alerta solicitando
    um nome válido.
    */
    if(novoAmigo == ""){
        //se campo for vazio mostra alert
        alert("Por favor, insira um nome.");
    }else{
        //senão add no array 
        amigos.push(novoAmigo);
    }
    //limpa campo de texto
    LimparCampo();
}

/*
Visualizar a lista: Os nomes inseridos 
aparecerão em uma lista abaixo do campo de 
entrada.
*/
function AtualizarLista(){

}

/*
Sorteio aleatório: Ao clicar no botão "Sortear 
Amigo", um nome da lista será selecionado 
aleatoriamente e exibido na página.
*/
function SortearAmigo(){

}


//funções auxiliares
function LimparCampo(){
    campo = document.getElementById("amigo");
    campo.value = '';
}