function ativarContagem() {
    // document.getElementById('tempo').innerHTML = 'Começou a contar'

    // // Executa a função após dar o tempo determinado
    // tempo = setTimeout(function() {
    //     document.getElementById('tempo').innerHTML = 'Executou o setTimeout'
    // }, 10000) // 1000 = 1s

    tempo = setInterval(function () {
    var cronometro = document.getElementById('tempo').innerHTML
    var soma = parseInt(cronometro) - 1

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = 'Tempo esgotado'
            pararContagem()
        } else {
            document.getElementById('tempo').innerHTML = soma
        }
}, 500)
}

function pararContagem() {
    clearTimeout(tempo)
    document.getElementById('tempo').innerHTML = 'Parou a contagem'
}