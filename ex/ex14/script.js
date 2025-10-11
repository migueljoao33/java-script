var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor inválido ou já está na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores == 0) {
        alert('antes de você finalizar você precisa acicionar algo!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]

        var media = 0
        var soma = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
    } if (valores == 0) {
        res.innerHTML = ''
    } else {
    if (tot == 1) {
        res.innerHTML = `<p> ao todo temos ${tot} número cadastrado</p>`
    } else {
        res.innerHTML = `<p> ao todo temos ${tot} números cadastrados</p>`
    }
    media = soma / tot
    res.innerHTML += `<p> o maior valor é ${maior}</p>`
    res.innerHTML += `<p> o menor valor é ${menor}</p>`
    res.innerHTML += `<p> a soma do(s) valores = ${soma}</p>`
    res.innerHTML += `<p> a media do(s) valores é = ${media}</p>`
}
}