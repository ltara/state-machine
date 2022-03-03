const lightDom = document.querySelectorAll('.light')
const lightMap = {
  green: lightDom[0],
  yellow: lightDom[1],
  red: lightDom[2]
}

const FSM = {
  green: {
    switchLight: function(){ 
      lightMap['green'].classList.remove('green')
      lightMap['yellow'].classList.add('yellow')
      this.currState = FSM.yellow
    }
  },
  yellow: {
    switchLight: function(){ 
      lightMap['yellow'].classList.remove('yellow')
      lightMap['red'].classList.add('red')
      this.currState = FSM.red
    }
  }, 
  red: {
    switchLight: function(){ 
      lightMap['red'].classList.remove('red')
      lightMap['green'].classList.add('green')
      this.currState = FSM.green
    } 
  }
}

class Light {
  constructor() {     
    this.currState = FSM.green; // 设置初始状态
  }
  init() {
    setInterval(() => {
      this.currState.switchLight.call(this)
    }, 3000)
  }
}

const light = new Light()

light.init()