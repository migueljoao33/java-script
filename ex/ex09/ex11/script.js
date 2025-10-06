function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('dn')
    var res = document.getElementById('res')
    var img = document.getElementById('photo')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('try again')
    } else {
        var sex = document.getElementsByName('radgender')
        var idade = ano - Number(fano.value)
        var genero = ''
    } 
    
    if (sex[0].checked) {
        genero = 'man'
        if (idade >= 0 && idade < 3) {
            img.setAttribute('src', "imgs/bebe-m.jpg")
        } else if (idade >= 3 && idade < 12) {
            img.setAttribute('src', "imgs/crianca-m.jpeg")
        } else if (idade >= 12 && idade < 18) {
            img.setAttribute('src', "imgs/adolescente-m.jpg")
        } else if (idade >= 18 && idade < 60) {
            img.setAttribute('src', "imgs/adulto-m.jpg")
        } else if (idade >= 60) {
            img.setAttribute('src', "imgs/idoso-m.jpg")
        }

    } else if (sex[1].checked) {
        genero = 'woman'
        if (idade >= 0 && idade < 3) {
            img.setAttribute('src', "imgs/bebe-f.jpg")
        } else if (idade >= 3 && idade < 12) {
            img.setAttribute('src', "imgs/crianca-f.jpg")
        } else if (idade >= 12 && idade < 18) {
            img.setAttribute('src', "imgs/adolescente-f.jpg")
        } else if (idade >= 18 && idade < 60) {
            img.setAttribute('src', "imgs/adulto-f.jpg")
        } else if (idade >= 60) {
            img.setAttribute('src', "imgs/idoso-f.jpg")
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `detected ${genero} and ${idade} years old`
}