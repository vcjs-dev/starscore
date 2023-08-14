<template>
  <main>
    <div>
      <div ref="starscoreContainer"></div>
    </div>
  </main>
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
      onChange(score) {
        console.log(score)
      },
    })

    console.log(starscoreInstance.value)
  }
}

onMounted(() => {
  init()
})
</script>
