var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img = document.querySelector('img')
var fotos = document.getElementById('fotos')
var ul = document.querySelector('ul')
var count = 0
img1.addEventListener('click', mudar1)
img2.addEventListener('click', mudar2)
img3.addEventListener('click', mudar3)
fotos.addEventListener('click', mostrar_fotos)

function mostrar_fotos() {
    count++
    if (count == 1) {
        ul.style.animation = 'janela_fotos 1.5s ease-out'
        setTimeout(function() {img1.style.display = 'block'}, 500)
        setTimeout(function() {img2.style.display = 'block'}, 1000)
        setTimeout(function() {img3.style.display = 'block'}, 1500)
    } else {
        count = 0
        ul.style.animation = 'none'
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
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