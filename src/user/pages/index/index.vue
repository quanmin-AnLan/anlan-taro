<template>
  <div>
    {{ name }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('user')
</script>