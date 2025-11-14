// // objeto carro
// const carro = {
//     nome: 'Fiat',
//     modelo: 'Uno',
//     motor: ['1.6', '1.4', '1.0']
// }

// // converteu para texto
// const texto = JSON.stringify(carro)

// document.getElementById('area').innerHTML = texto

// // converteu para objeto
// const obj = JSON.parse(texto)

// // pegamos um valor deste objeto
// console.log(obj.motor[1])


// na prática:

function buscarCEP() {
    const input = document.getElementById('cep').value

    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/')
    ajax.send()

    ajax.onload = function() {
        document.getElementById('texto').innerHTML = this.response
        
        const obj = JSON.parse(this.responseText)

        const logradouro = obj.logradouro
        const cidade = obj.localidade
        const estado = obj.uf

        document.getElementById('texto').innerHTML = `logradouro: ${logradouro}<br>cidade: ${cidade}<br>estado: ${estado}`
    }
}