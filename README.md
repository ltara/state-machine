# 状态机

## 什么是状态机？

>  有限状态机又称有限状态自动机，简称状态机，是表示**有限个状态**以及在这些**状态之间的转移和动作**等行为的数学计算模型

特征：

- 状态总数（state）是有限的。

  * 任一时刻，只处在一种状态之中。
  * 某种条件下，会从一种状态转变（transition）到另一种状态。





## 简单示例

### 红绿灯

```js
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
    }
    if (state === 'red'){
      this.state = 'yellow'
    }
    if (state === 'yellow') {
      this.state = 'green'
    }
  }
}

const light = new Light()

light.init()
```



### 动作小游戏





## 状态管理库

### 状态机函数库

#### 红绿灯

- **有限状态集（state）**：绿灯、红灯、黄灯
- **状态转移条件（event）**：3s之后
- **状态转移动作（action）**：切换灯的颜色

```js
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
      console.log(from, to)
    }
  }
});

setInterval(() => {
  lightFsm.switchLight()
}, 3000)
```



#### 动作小游戏





### 状态管理库

介绍redux、vuex、flux、mobx



## 应用

### promise





### 词法分析



