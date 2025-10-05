    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `agora são ${hour} horas.`
function load() {
    if (hour >= 0 || hour < 12) {
        img.innerHTML = `<img src="/imgs/morning.png" alt="img">`
        document.body.style.background = '#e2cd9f'
    } if (hour >= 12 || hour < 18) {
        img.innerHTML = `<img src="/imgs/sun-set.png" alt="img">`
        document.body.style.background = '#b9846f'
    } if (hour >= 18 || hour < 0) {
        img.innerHTML = `<img src="/imgs/night.png" alt="img">`
        document.body.style.background = '#515154'
    }
}