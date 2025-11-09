// var res = parimp(4)
// console.log(res) 

// function parimp(n) {
//     if (n%2 == 0) {
//         return 'par'
//     } else {
//         return 'ímpar'
//     }
// }


// function soma(n1 = 0, n2 = 0) {
//     return n1 + n2
// }
// console.log(soma(4))


// var res = function(x) {
//     return x*2
// }
// console.log(res(2))


// function fatorial(n) {
//     var fat = 1
//     for (var c = n; c > 1; c--) {
//         fat *= c
//     }
//     return fat
// }
// console.log(fatorial(5))


function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))