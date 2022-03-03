import { createMachine, assign } from 'xstate'

export const toggleMachine = createMachine(
  {
    id: 'toggle',
    initial: 'enabled',
    context: {
      value: '登录'
    },
    states: {
      enabled: {
        on: {
          TOGGLE: 'disabled'
        },
        initial: 'idle',
        states: {
          idle: {}
        },
      },
      disabled: {
        on: {
          TOGGLE: 'enabled'
        },
        initial: 'idle',
        states: {
          idle: {},
          loading: {}
        }
      }
    },
    on: {
      LOGIN: {
        target: '.disabled.loading',
        actions: [assign({ value: '登录中...' })]
      },
      SUCCESS: {
        target: '.enabled.idle',
        actions: [assign({ value: '登录' })]
      },
      FAIL: {
        target: '.enabled.idle',
        actions: [assign({ value: '登录' })]
      }
    }
  }
)