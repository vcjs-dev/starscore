<template>
  <div class="">
    <DemoPanel title="Change Event">
      <StarScore />

      <template #code>
        <pre class="lang-markup"><code>{{ StarScoreRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import 'prismjs'
import StarScore from './StarScore.vue'
import StarScoreRaw from './StarScore.vue?raw'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ChangeEventUsage',
})
</script>
