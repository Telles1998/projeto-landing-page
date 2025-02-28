var setadireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    bruna.style ="display:none"
    leonardo.style ="display:flex"
    setaesquerda.style ="display:none"
    setadireita.style ="display:flex"
}