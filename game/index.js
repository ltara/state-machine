const personDom = document.querySelector('.person')

let timer = null

function idle() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  const personStyle = getComputedStyle(personDom)
  timer = setInterval(() => {
    let positionX = personStyle.backgroundPositionX
    if (parseInt(positionX) <= -432) {
      personDom.style.backgroundPositionX = '0'
    } else {
      personDom.style.backgroundPositionX = `${parseInt(positionX) - 144}px`
    }
  }, 200)
}

function walk() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  const personStyle = getComputedStyle(personDom)
  timer = setInterval(() => {
    let positionX = personStyle.backgroundPositionX
    if (parseInt(positionX) <= -720) {
      personDom.style.backgroundPositionX = '0'
    } else {
      personDom.style.backgroundPositionX = `${parseInt(positionX) - 144}px`
    }
  }, 200)
}

function run() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  const personStyle = getComputedStyle(personDom)
  timer = setInterval(() => {
    let positionX = personStyle.backgroundPositionX
    if (parseInt(positionX) <= -720) {
      personDom.style.backgroundPositionX = '0'
    } else {
      personDom.style.backgroundPositionX = `${parseInt(positionX) - 144}px`
    }
  }, 200)
}

function jump() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  const personStyle = getComputedStyle(personDom)
  timer = setInterval(() => {
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

function action(act) {
  console.log(act)
}

const cls = ['idle', 'walk', 'run', 'jump']

let isDown = false

document.onkeydown = (e) => {
  if (!isDown && e.code === 'ArrowRight') {
    personDom.classList.remove(...cls)
    personDom.classList.add('walk')
    walk()
  }
  if (!isDown && e.code === 'ArrowUp') {
    personDom.classList.remove(...cls)
    personDom.classList.add('jump')
  }
  isDown = true
}

document.onkeyup = () => {
  personDom.classList.remove(...cls)
  personDom.classList.add('idle')
  idle()
  isDown = false
}