const { createMachine, actions, interpret } = XState

const lightDom = document.querySelectorAll('.light')
const lightMap = {
  green: lightDom[0],
  yellow: lightDom[1],
  red: lightDom[2]
}

const lightMachine = createMachine(
  {
    id: 'light',
    initial: 'green',
    states: {
      green: {
        on: {
          TIMER: 'yellow'
        }
      },
      yellow: {
        on: {
          TIMER: 'red'
        }
      },
      red: {
        on: {
          TIMER: 'green'
        }
      }
    }
  }
)

const lightService = interpret(lightMachine).onTransition((state) => {
  if (state.event.type !== 'xstate.init') {
    lightMap[state.history.value].classList.remove(state.history.value)
    lightMap[state.value].classList.add(state.value)
  }
})

// 启动状态机 初始化
lightService.start()

// 发送事件
setInterval(() => {
  lightService.send('TIMER')
}, 1000)

// 批量发送事件
// lightService.send(['TIMER', 'TIMER'])

// 终止状态机
// lightService.stop()
