<template>
  <BootScreen v-if="booting" @complete="booting = false" />
  <Desktop v-else />
</template>

<script setup>
import { ref } from 'vue'
import BootScreen from './components/BootScreen.vue'
import Desktop from './components/Desktop.vue'

const booting = ref(true)
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
