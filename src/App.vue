<template>
  <AppleBoot v-if="booting && isMobile" @complete="booting = false" />
  <BootScreen v-else-if="booting" @complete="booting = false" />
  <IpodMobile v-else-if="isMobile" />
  <Desktop v-else />
</template>

<script setup>
import { ref } from 'vue'
import { useDevice } from './composables/useDevice'
import BootScreen from './components/BootScreen.vue'
import AppleBoot from './components/AppleBoot.vue'
import Desktop from './components/Desktop.vue'
import IpodMobile from './components/IpodMobile.vue'

const { isMobile } = useDevice()
const booting = ref(true)
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
