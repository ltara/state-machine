const lightDom = document.querySelectorAll('.light')
const lightMap = {
  green: lightDom[0],
  yellow: lightDom[1],
  red: lightDom[2]
}

class Light {
  constructor() {
    this.state = 'green'
  }
  init() {
    setInterval(() => {
      this.switchLight(this.state)
    }, 1000)
  }
  switchLight(state) {
    if (state === 'green') {
      this.state = 'yellow'
      lightMap['green'].classList.remove('green')
      lightMap['yellow'].classList.add('yellow')
    }
    if (state === 'yellow') {
      this.state = 'red'
      lightMap['yellow'].classList.remove('yellow')
      lightMap['red'].classList.add('red')
    }
    if (state === 'red'){
      this.state = 'green'
      lightMap['red'].classList.remove('red')
      lightMap['green'].classList.add('green')
    }
  }
}

const light = new Light()

light.init()