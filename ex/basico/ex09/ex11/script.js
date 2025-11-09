function tabuada() {
    var num = document.getElementById('n')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('digite um número')
    } else {
        var n = Number(num.value)
        var c = 1

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}