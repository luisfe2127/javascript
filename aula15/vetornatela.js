var num = [5, 2, 3, 1, 4]

num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*for (var v = 0; v < valores.length; v++) {
    console.log(`A posiçao ${v} tem valor ${valores[v]}`)
}*/

/*for(var pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}*/

var pos = num.indexOf(4)

if (pos == -1) {
    console.log(`Valor nao encontrado`)
} else {
    console.log(`O valor esta na posiçao ${pos}`)
}
