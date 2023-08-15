<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 2.5,
      allowHalf: true,
    })
  }
}

onMounted(() => {
  init()
})
</script>
