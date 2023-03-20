
// pegar o elemento que representa o botao no js
const botaoTrailer = document.querySelector('.botao-trailer')

// passo 3: pegar o modal no js
const modal = document.querySelector('.modal')

// passo 2: identificar quando o usuario clica no botao
botaoTrailer.addEventListener("click",() =>{
    modal.classList.add('aberto')
    video.setAttribute("src", linkDoVideo)
})


// passo 4: abrir o modal com js
//Objetivo 2
//passo 1: pegar o elemento fechar modal

const botaoFecharModal = document.querySelector(".fechar-modal")
botaoFecharModal.addEventListener("click",() => {
    modal.classList.remove('aberto')
    video.setAttribute("src","")
});
const linkDoVideo = video.src
const video = document.getElementById("video")