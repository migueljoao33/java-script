// comando básico para pegar a data
const data = new Date()
// console.log(data)

const dataAno = data.getFullYear() 
console.log(dataAno)

const dataMes = data.getMonth()
// console.log(dataMes)

const dataMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const dataMesEscrito = dataMeses[data.getMonth()]
// console.log(dataMesEscrito)

const dataDiaDoMes = data.getDate()
console.log(dataDiaDoMes)

// 0 = dom, 1 = seg, 2 = ter, 3 = qua, 4 = qui, 5 = sex, 6 = sáb
const dataDiaDaSemana = data.getDay()
// console.log(dataDiaDaSemana)

const dataDiasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const dataDiaEscrito = dataDiasDaSemana[data.getDay()]
// console.log(dataDiaEscrito)

// 0 até a 23
const dataHora = data.getHours()
// console.log(dataHora)

// 0 até 59
const dataMinuto = data.getMinutes()
// console.log(dataMinuto)

// 0 até 59
const dataSegundo = data.getSeconds()
console.log(dataSegundo)

// 0 até 999
const dataMilisegundos = data.getMilliseconds()
console.log(dataMilisegundos)

// const dataBrasil = data.toLocaleString('pt-br')
const dataBrasil = data.toLocaleString('pt-br', { dateStyle: 'short'})
console.log(dataBrasil)

// pegar valores separados
const d = new Date()
const dDiaMes = d.getDate()
const dMes = d.getMonth()
const dAno = d.getFullYear()

const dataPadraoBrasil = dDiaMes + '/' + dMes + '/' + dAno
console.log(dataPadraoBrasil)


const hoje = new Date()
const vencimento = new Date(2025, 10, 9)

if (hoje > vencimento) {
    console.log('Sua conta está vencida')
} else {
    console.log('Sua conta não está vencida')
}

// diferença entre duas datas em dias
const dataInicial = new Date()
const dataFinal = new Date(2025, 10, 8)

const diferencaDeTempo = dataFinal.getTime() - dataInicial.getTime()

const diferencaDeDias = Math.ceil(diferencaDeTempo / (24 * 60 * 60 * 1000))

console.log(`${diferencaDeDias} dias`)