<template>
  <main class="home-main">
    <div>
      <BasicUsage />
    </div>
    <div>
      <BuiltInTypeUsage />
    </div>
    <div>
      <CustomStyleUsage />
    </div>
    <div>
      <HalfStarUsage />
    </div>
    <div>
      <CustomCountUsage />
    </div>
    <div>
      <ClearableUsage />
    </div>
    <div>
      <DisabledUsage />
    </div>
    <div>
      <ReadonlyUsage />
    </div>
    <div>
      <ChangeEventUsage />
    </div>
  </main>
</template>

<script lang="ts" setup>
import BasicUsage from '@/components/BasicUsage/index.vue'
import CustomStyleUsage from '@/components/CustomStyleUsage/index.vue'
import HalfStarUsage from '@/components/HalfStarUsage/index.vue'
import CustomCountUsage from '@/components/CustomCountUsage/index.vue'
import DisabledUsage from '@/components/DisabledUsage/index.vue'
import ReadonlyUsage from '@/components/ReadonlyUsage/index.vue'
import ClearableUsage from '@/components/ClearableUsage/index.vue'
import ChangeEventUsage from '@/components/ChangeEventUsage/index.vue'
import BuiltInTypeUsage from '@/components/BuiltInTypeUsage/index.vue'
</script>

<style lang="scss" scoped>
.home-main {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
