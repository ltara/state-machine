<template>
  <div class="hello">
    <button :disabled="isDisabled" @click="handleSubmit">{{ isLoading ? '提交中...' : '提交'}}</button>
    <br />
    <br />
    <button :disabled="current.matches('disabled')" @click="send('TOGGLE')">{{ context.value }}</button>
  </div>
</template>

<script>
import { interpret } from 'xstate'
import { toggleMachine } from './toggle'

export default {
  name: 'HelloWorld',
  created() {
    this.toggleService
      .onTransition((state) => {
        this.current = state
        this.context = state.context
      })
      .start()
  },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      toggleService: interpret(toggleMachine),
      current: toggleMachine.initialState,
      context: toggleMachine.context
    }
  },
  methods: {
    handleSubmit() {
      this.isLoading = true
      this.isDisabled = true
      setTimeout(() => {
        this.isLoading = false
        this.isDisabled = false
      }, 2000)
    },
    send(event) {
      this.toggleService.send(event)
      // setTimeout(() => {
      //   this.toggleService.send('SUCCESS')
      // }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
