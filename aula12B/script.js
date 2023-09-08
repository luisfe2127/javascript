function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') 

    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('Verifique seus dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
         gênero = 'Homem'
         if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'pexels-denafi-sy-786220')
         } else if (idade < 21) {
            img.setAttribute('src', 'pexels-demeter-attila-60778')
         } else if (idade < 50) {
            img.setAttribute('src', 'pexels-andrea-piacquadio-3772618')
         } else {
            img.setAttribute('src', 'aula12B/pexels-andrea-piacquadio-3831645.jpg')
         }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'pexels-files-1648374')
             } else if (idade < 21) {
                img.setAttribute('src', 'pexels-anastasiya-gepp-1462630')
             } else if (idade < 50) {
                img.setAttribute('src', 'pexels-andrea-piacquadio-3769021')
             } else {
                img.setAttribute('src', 'pexels-nashua-volquezyoung-1729931')
             }
        }
            res.style.textAlign = 'center'
            res.innerHTML = `Você é ${gênero} e tem ${idade} anos`
            res.appendChild(img)
        }
    
}


