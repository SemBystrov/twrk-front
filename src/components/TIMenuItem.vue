<template>
  <NuxtLink
    :to="path"
    class="px-4 first:pl-0 font-medium text-12"
    :class="path !== $route.path? 'text-text-gray-500': 'text-text-gray-700'"
  >
    {{label}}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    label: String,
    path: String
  }
}
</script>

<style lang="scss" module>

</style>
