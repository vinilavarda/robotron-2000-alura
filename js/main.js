const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
let braco = document.querySelector('#braco')

somar.addEventListener('click', () => {
  braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener('click', () => {
  braco.value = parseInt(braco.value) - 1
  if (parseInt(braco.value) <= 0) {
    braco.value = 0
  }
})
