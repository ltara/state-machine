const lightDom = document.querySelectorAll('.light')
const lightMap = {
  green: lightDom[0],
  yellow: lightDom[1],
  red: lightDom[2]
}

class LightState {
  constructor(light) {
    this.light = light;
  }
  switchLight() {}
}

class GreenState extends LightState {
  constructor(light) {
    super(light)
  }
  switchLight() {
    lightMap['green'].classList.remove('green')
    lightMap['yellow'].classList.add('yellow')
    this.light.setState(this.light.yellowLight)
  }
}

class YellowState extends LightState {
  constructor(light) {
    super(light)
  }
  switchLight() {
    lightMap['yellow'].classList.remove('yellow')
    lightMap['red'].classList.add('red')
    this.light.setState(this.light.redLight)
  }
}

class RedState extends LightState {
  constructor(light) {
    super(light)
  }
  switchLight() {
    lightMap['red'].classList.remove('red')
    lightMap['green'].classList.add('green')
    this.light.setState(this.light.greenLight)
  }
}

class Light {
  constructor() {
    this.greenLight = new GreenState(this)
    this.yellowLight = new YellowState(this)
    this.redLight = new RedState(this)
  }
  init() {
    this.currState = this.greenLight // 设置初始状态
    setInterval(() => {
      this.currState.switchLight()
    }, 1000)
  }
  setState(newState) {
    this.currState = newState;
  }
}

const light = new Light()

light.init()