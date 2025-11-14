let contador = 0
const input = document.getElementById('inputTarefa')
const btnAdd = document.getElementById('btn-add')
const main = document.getElementById('areaLista')

function addTarefa() {
    // pegar o valor digitado no input
    const valorInput = input.value
    if ((valorInput !== '') && (valorInput !== undefined) && (valorInput !== null)) {

        ++contador

        const novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="fa-regular fa-circle"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="deletar"><i class="fa-solid fa-trash"></i> Deletar</button>
            </div>
        </div>`

        main.innerHTML += novoItem

        input.value = ''
        input.focus()
    } else {
        alert("Dados inválidos")
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if (classe == 'item') {
        item.classList.add('clicado')
        
        const icone = document.getElementById('icone_'+contador)
        icone.classList.remove('fa-regular.fa-circle')
        icone.classList.add('fa-solid.fa-circle-check')

        item.parentNode.appendChild(item)

    } else {
        item.classList.add('clicado')
        
        const icone = document.getElementById('icone_'+contador)
        icone.classList.remove('fa-solid fa-circle-check')
        icone.classList.add('fa-regular.fa-circle')
    }
}

input.addEventListener("keyup", function(event) {
    // 13 = enter
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})