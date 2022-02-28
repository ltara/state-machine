const lightDom = document.querySelectorAll('.light')
const lightMap = {
  green: lightDom[0],
  red: lightDom[1],
  yellow: lightDom[2]
}

const lightFsm = new StateMachine({
  init: 'green',
  transitions: [
    { name: 'switchLight', from: 'green', to: 'red' },
    { name: 'switchLight', from: 'red', to: 'yellow' },
    { name: 'switchLight', from: 'yellow', to: 'green' },
  ],
  methods: {
    onSwitchLight: (lifecycle) => {
      const { from, to } = lifecycle
      lightMap[from].style.backgroundColor = ''
      lightMap[to].style.backgroundColor = to
    }
  }
});

setInterval(() => {
  lightFsm.switchLight()
}, 3000)
