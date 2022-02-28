const personDom = document.querySelector('.person')

let timer1 = null
let timer2 = null

function action(type) {
  if (timer1) {
    clearInterval(timer1)
    timer1 = null
  }
  const actionMap = {
    idle: {
      last: -432,
      per: 144
    },
    walk: {
      last: -720,
      per: 144
    },
    run: {
      last: -720,
      per: 144
    }
  }
  const personStyle = getComputedStyle(personDom)
  timer1 = setInterval(() => {
    let positionX = personStyle.backgroundPositionX
    if (parseInt(positionX) <= actionMap[type].last) {
      personDom.style.backgroundPositionX = '0'
    } else {
      personDom.style.backgroundPositionX = `${parseInt(positionX) - actionMap[type].per}px`
    }
  }, 200)
}

function jump() {
  if (timer2) {
    clearInterval(timer2)
    timer2 = null
  }
  const personStyle = getComputedStyle(personDom)
  timer2 = setInterval(() => {
    let positionX = personStyle.backgroundPositionX
    let marginLeft = personStyle.marginLeft
    if (parseInt(positionX) <= -675) {
      personDom.style.backgroundPositionX = '0'
      personDom.style.marginLeft = '100px'
    } else {
      personDom.style.backgroundPositionX = `${ parseInt(positionX) - 135 }px`
      personDom.style.marginLeft = `${ parseInt(marginLeft) - 10 }px`
    }
  }, 300)
}

const idleBtnDom = document.querySelector('.idle-btn')
const walkBtnDom = document.querySelector('.walk-btn')
const runBtnDom = document.querySelector('.run-btn')
const jumpBtnDom = document.querySelector('.jump-btn')
const cls = ['idle', 'walk', 'run', 'jump']

idleBtnDom.onclick = () => {
  personDom.classList.remove(...cls)
  personDom.classList.add('idle')
  action('idle')
}
walkBtnDom.onclick = () => {
  personDom.classList.remove(...cls)
  personDom.classList.add('walk')
  action('walk')
}
runBtnDom.onclick = () => {
  personDom.classList.remove(...cls)
  personDom.classList.add('run')
  action('run')
}
jumpBtnDom.onclick = () => {
  personDom.classList.remove(...cls)
  personDom.classList.add('jump')
  jump()
}