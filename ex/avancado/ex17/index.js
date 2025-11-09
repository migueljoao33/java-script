class Carro {
    constructor(nome, ano) {
        this.nome = nome
        this.ano = ano
    }
}

const carro01 = new Carro("Audi", 2020)
const carro02 = new Carro("Ferrari", 2010)

console.log(carro01, carro02)