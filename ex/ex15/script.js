var amigo = {
nome: 'josé',
sexo: 'm', 
peso: 85.4,
engordar(p=0) {
    console.log('engordou')
    this.peso += p
}
}
amigo.engordar(5)
console.log(`${amigo.nome} tem ${amigo.peso}kg`)