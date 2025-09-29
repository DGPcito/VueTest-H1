<template>
  <MiComponente titulo="Mi título de prueba" />
  <MiComponente titulo="" />
</template>

<script>
import MiComponente from './components/MiComponente.vue'

export default {
  components: { MiComponente }
}
</script>