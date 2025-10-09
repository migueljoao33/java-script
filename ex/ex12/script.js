var num = [5, 8, 2, 9, 3]
// num.sort()  
// num.push(1)
// console.log(num)
// console.log(`p vetor tem ${num.length} posições`)
// console.log(`o primeiro valor do vetor é ${num[0]}`)

// for (pos = 0; pos < num.length; pos++) {
//     console.log(`pos = ${pos} valor = ${num[pos]}`)
// }

for (var pos in num) {
    console.log(`pos = ${pos} valor = ${num[pos]}`)
    pos++
}