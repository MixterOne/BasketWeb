function MudaTexto(){
    let arrayFrase = ["Passo a passo. Não consigo pensar em nenhum outro modo de se realizar algo. - Michael Jordan",

     "Quando você conhece a sensação de fracasso, a determinação persegue o sucesso. - Kobe Bryant",

    "A dor não diz quando você deve parar. A dor é a vozinha em sua cabeça que tenta impedi-lo pois sabe que, se você continuar, você irá mudar. - Kobe Bryant",

    "Preocupe-se mais com a sua consciência do que com sua reputação. - John Wooden",

    "Você tem que ser capaz de aceitar o fracasso para melhorar - LeBron James",

    "Estou confiante de que sou o melhor jogador do mundo. É tão simples - LeBron James",

    "Vocês já viram muitos jogadores melhores que eu. Mas não vão ver nenhum que tenha treinado mais e que tenha tanta obstinação pelo basquete quanto eu. - Oscar Schmidt"
]

    let frase = document.querySelector('.frase')
    let tamanho_array = arrayFrase.length
    let n_aleatorio = Math.floor(Math.random() * tamanho_array);
    let retorno_aleatorio = arrayFrase[n_aleatorio]

    frase.innerHTML = retorno_aleatorio
}

function curti1(){
    let divPai = document.querySelector(".actionCard1")
    let btn = document.querySelector(".action1")
    btn.parentNode.removeChild(btn)

    const newSpan = document.createElement('span')
    newSpan.innerHTML = `Curtido +1`
    divPai.appendChild(newSpan)


}

function curti2(){
    let divPai = document.querySelector(".actionCard2")
    let btn = document.querySelector(".action2")
    btn.parentNode.removeChild(btn)

    const newSpan = document.createElement('span')
    newSpan.innerHTML = `Curtido +1`
    divPai.appendChild(newSpan)

    
}

function curti3(){
    let divPai = document.querySelector(".actionCard3")
    let btn = document.querySelector(".action3")
    btn.parentNode.removeChild(btn)

    const newSpan = document.createElement('span')
    newSpan.innerHTML = `Curtido +1`
    divPai.appendChild(newSpan)

    
}


