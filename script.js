const input = document.querySelector('.input-task')
const button = document.querySelector('.button-task')
const listaCompleta = document.querySelector('.list-task')
 
// minha lista de itens
let minhaListaDeItens = []

// pega tarefa digitada
function adicionaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluido: false
    })

    input.value = ''
    
    mostrarTarefas()
}

// mostra a nova tarefa gerada
function mostrarTarefas () {

    let novaTarefa = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaTarefa = novaTarefa + `
        <li class="task ${item.concluido && "done"}">
            <img src="./img/checked.png" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" onclick="deletarItem(${posicao})">
        </li>
        `
    })

    listaCompleta.innerHTML = novaTarefa


}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
    console.log(posicao)
}


function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluido = !minhaListaDeItens[posicao].concluido 
    
    mostrarTarefas()
}


button.addEventListener('click', adicionaTarefa)



