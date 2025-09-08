var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img = document.querySelector('img')
var fotos = document.getElementById('fotos')
var count = 0
img1.addEventListener('click', mudar1)
img2.addEventListener('click', mudar2)
img3.addEventListener('click', mudar3)
fotos.addEventListener('click', mostrar_fotos)
document.querySelector("input[type='button']").addEventListener('click', som_stitch)

function mostrar_fotos() {
    count++
    if (count == 1) {
        img1.style.display = 'inline-block'
        img2.style.display = 'inline-block'
        img3.style.display = 'inline-block'
    } else {
        count = 0
        img3.style.display = 'none'
        img2.style.display = 'none'
        img1.style.display = 'none'
    }
}

function mudar1() {
    img.src = 'imagens/Icaro1.jpg'
}

function mudar2() {
    img.src = 'imagens/Icaro2.jpg'
}

function mudar3() {
    img.src = 'imagens/Icaro3.jpg'
}

function som_stitch() {
    new Audio('audio/stitch-sound.mp3').play()
}