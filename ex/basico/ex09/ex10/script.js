function contar() {
    let ini = document.getElementById('c1')
    let fim = document.getElementById('c2')
    let passo = document.getElementById('c3')
    let res = document.getElementById('res')
    res.style.marginLeft = '10px'

    if (ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ) {
        res.innerHTML = `não dá pra contar!!`
        alert('the data is not complete')
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert(`passo incompleto`)
        }
        if (i < f) {
        for (let c = i;c <= f;c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        } else {
        for (let c = i;c >= f;c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
 }