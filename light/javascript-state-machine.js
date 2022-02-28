const lightDom = document.querySelectorAll('.light')
const lightMap = {
  green: lightDom[0],
  yellow: lightDom[1],
  red: lightDom[2]
}

const lightFsm = new StateMachine({
  init: 'green',
  transitions: [
    { name: 'switchLight', from: 'green', to: 'yellow' },
    { name: 'switchLight', from: 'red', to: 'green' },
    { name: 'switchLight', from: 'yellow', to: 'red' },
  ],
  methods: {
    onSwitchLight: (lifecycle) => {
      const { from, to } = lifecycle
      lightMap[from].classList.remove(from)
      lightMap[to].classList.add(to)
    }
  }
});

setInterval(() => {
  lightFsm.switchLight()
}, 1000)
