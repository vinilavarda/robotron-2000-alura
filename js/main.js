const controle = document.querySelectorAll('.controle-ajuste')
const estatisticas = document.querySelectorAll('[data-estatistica]')
let sinal
let aux
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
}

//testando nova branch

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipulaDados(evento.target.textContent, evento.target.parentNode) //seleciona o texto que está inserido dentro do botão clicado */* seleciona a classe pai do evento.
    if (sinal == '+') {
      atualizaEstatisticasPositivo(evento.target.dataset.peca) //data- é ignorado
    } else {
      atualizaEstatisticasNegativo(
        evento.target.dataset.peca,
        evento.target.parentNode
      )
    }
  })
})

function manipulaDados(operacao, controlador) {
  const peca = controlador.querySelector('.controle-contador') // atribui à peca o item que tem classe controle-contador que pertence ao pai.

  if (operacao == '+') {
    peca.value = parseInt(peca.value) + 1
    sinal = '+'
  } else {
    if (parseInt(peca.value) <= 0) {
      peca.value = parseInt(peca.value) - 0
    } else {
      if (parseInt(peca.value) == 1) {
        peca.value = parseInt(peca.value) - 1
        aux = 1
        sinal = '-'
      } else {
        peca.value = parseInt(peca.value) - 1
        aux = 0
        sinal = '-'
      }
    }
  }
}

function atualizaEstatisticasPositivo(peca) {
  estatisticas.forEach(elemento => {
    elemento.textContent =
      parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}

function atualizaEstatisticasNegativo(peca, controlador) {
  const peca2 = controlador.querySelector('.controle-contador') // atribui à peca o item que tem classe controle-contador que pertence ao pai.

  if (aux == 1) {
    estatisticas.forEach(elemento => {
      elemento.textContent =
        parseInt(elemento.textContent) -
        pecas[peca][elemento.dataset.estatistica]
    })
    aux = 0
  }

  if (parseInt(peca2.value) > 0) {
    estatisticas.forEach(elemento => {
      elemento.textContent =
        parseInt(elemento.textContent) -
        pecas[peca][elemento.dataset.estatistica]
    })
  }
}
