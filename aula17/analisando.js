var num = document.getElementById('inumero')
var res = document.getElementById('res')
var lista = document.getElementById('ilista')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf (Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {

    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('valor ja encontrado ou invalido')
        }
        num.value = ''
        num.focus()
    }

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um valor')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0 
        
        for(var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]

        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados <p>`
        res.innerHTML += `<p> O maior valor foi ${maior} <p>`
        res.innerHTML += `<p> O menor valor foi ${menor} <p>`
        res.innerHTML += `<p> Somando todos valores, ao todo, temos ${soma} <p>`
        res.innerHTML += `<p> A media dos valores é ${media} <p>`
        
        }
}