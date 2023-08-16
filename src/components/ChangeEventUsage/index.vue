<template>
  <div class="">
    <DemoPanel title="Change Event">
      <StarScore />

      <template #code>
        <pre
          class="lang-markup"
        ><code>{{ formatLibName(StarScoreRaw) }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import 'prismjs'
import StarScore from './StarScore.vue'
import StarScoreRaw from './StarScore.vue?raw'
import { formatLibName } from '@/utils'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ChangeEventUsage',
})
</script>
