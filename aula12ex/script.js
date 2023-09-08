
    function carregar() {

        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')

        var data = new Date()
        var hora = data.getHours()
        
        msg.innerHTML = `Agora são ${hora} horas`

        if (hora >= 0 && hora < 12) {
            img.src = 'pexels-vlada-karpovich-4448846.jpg'
        } else if (hora >= 12 && hora <= 18) {
            img.src = 'pexels-anderson-martins-2386144.jpg'
        } else {
            img.src = 'pexels-eberhard-grossgasteiger-1421903.jpg'
        }

    }