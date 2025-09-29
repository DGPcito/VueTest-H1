<template>
  <h1 v-if="titulo">{{ titulo }}</h1>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: ''
    }
  }
}
</script>