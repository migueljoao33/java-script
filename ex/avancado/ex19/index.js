class Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev) {
        this.nome = nome
        this.idade = idade
        this.principalLinguagem = principalLinguagem
        this.tipoDeDev = tipoDeDev
    }

    saudacao() {
        console.log(`Oi! Sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem} e me chamo Pedro`)
    }
}

// const dev = new Dev("joao", 11, "html e css")

// console.log(dev)
// dev.saudacao()

class FrontendDev extends Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev, framework) {
        super(nome, idade, principalLinguagem, tipoDeDev)
        this.framework = framework
    }
}

class BackendDev extends Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev, bancoDeDados) {
        super(nome, idade, principalLinguagem, tipoDeDev)
        this.bancoDeDados = bancoDeDados
    }
}

const FrontendDev01 = new FrontendDev("João", 18, "JavaScript", "Frontend", "React")
const BackendDev01 = new BackendDev("Caio", 25, "C#", "Backend", "SQL Server")

console.log(FrontendDev01)
FrontendDev01.saudacao()

console.log(BackendDev01)
BackendDev01.saudacao()