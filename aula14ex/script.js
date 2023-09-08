function verificar() {
var inicio = document.getElementById('iinicio')
var fim = document.getElementById('ifim')
var passo = document.getElementById('ipasso')
var res = document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert(`Esta faltando dados`)
} else {
    res.innerHTML = `Contando: `
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0) {
        p = 1
    }
    if (i < f) {
          for (var v = i; v <= f; v += p)
          res.innerHTML += `${v}`
    } else {
        for (var v = i; v >= f; v -= p)
        res.innerHTML += `${v}`
        
    }
    
}
}


