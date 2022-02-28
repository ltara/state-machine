const personDom = document.querySelector('.person')
const cls = ['idle', 'walk', 'run', 'jump']

let timer = null

const actionFsm = new StateMachine({
  init: 'idle',
  transitions: [
    { name: 'walk', from: 'idle', to: 'walk' },
    { name: 'run', from: 'idle', to: 'run' },
    { name: 'jump', from: 'idle', to: 'jump' },
    { name: 'idle', from: ['walk', 'run', 'jump'], to: 'idle' },
  ],
  methods: {
    onIdle: () => {
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
    },
    onWalk: () => {
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
    },
    onRun: () => {
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
    },
    onJump: () => {
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
  }
})

let isDown = false

document.onkeydown = (e) => {
  if (!isDown && e.code === 'ArrowRight') {
    personDom.classList.remove(...cls)
    personDom.classList.add('walk')
    actionFsm.walk()
  }
  if (!isDown && e.code === 'ArrowUp') {
    personDom.classList.remove(...cls)
    personDom.classList.add('jump')
    actionFsm.jump()
  }
  isDown = true
}

document.onkeyup = () => {
  personDom.classList.remove(...cls)
  personDom.classList.add('idle')
  actionFsm.idle()
  isDown = false
}

