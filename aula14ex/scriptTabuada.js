function gerar() {
    var numero = document.getElementById('inumero')
    var tab = document.getElementById('itabuada')
    

    if (numero.value.length == 0) {
        window.alert(`Coloque um numero`)
    } else {
        var n1 = Number(numero.value)
        var c = 1
        tab.innerHTML = ''
        
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1 * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}