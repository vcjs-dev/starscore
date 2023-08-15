<template>
  <div class="">
    <DemoPanel title="Clearable">
      <template #description>
        <div>
          When the clearable prop is set to
          <code class="language-markup">true</code>, clicking on the same value
          again will reset the value to <code class="language-markup">0</code>.
        </div>
      </template>

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
  name: 'ClearableUsage',
})
</script>
