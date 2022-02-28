const lightDom = document.querySelectorAll('.light')
const lightMap = {
  green: lightDom[0],
  red: lightDom[1],
  yellow: lightDom[2]
}

class Light {
  constructor() {
    this.state = 'green'
  }
  init() {
    setInterval(() => {
      this.switchLight(this.state)
    }, 3000)
  }
  switchLight(state) {
    if (state === 'green') {
      this.state = 'red'
      lightMap['green'].style.backgroundColor = ''
      lightMap['red'].style.backgroundColor = 'red'
    }
    if (state === 'red'){
      this.state = 'yellow'
      lightMap['red'].style.backgroundColor = ''
      lightMap['yellow'].style.backgroundColor = 'yellow'
    }
    if (state === 'yellow') {
      this.state = 'green'
      lightMap['yellow'].style.backgroundColor = ''
      lightMap['green'].style.backgroundColor = 'green'
    }
  }
}

const light = new Light()

light.init()