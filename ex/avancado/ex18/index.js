// const saudacao = (nome) => alert(" olá " + nome)

// const processaEntradaUsuario = (callback) => {
//     const nome = prompt("digite o seu nome: ")
//     callback(nome)
// }

// processaEntradaUsuario(saudacao)

// const callback = e => alert("aconteceu um evento " + e.type)

// window.addEventListener('click', callback)

// const somar = (x, y) => x + y

// const calcular = (x, y, computar) => computar(x, y)

// const resultado = calcular(20, 30, somar)

// console.log(resultado)

const arr = [1, 2, 3]

const newArr = arr.map(x => x + x)

console.log(newArr)