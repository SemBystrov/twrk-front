<template>
  <ul class="flex flex-col">
    <li v-for="item in model" class="flex items-center">
      <svg class="mr-[10px] w-[8px] h-[8px]" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.04311 6.08621C5.17148 6.08621 6.08621 5.17148 6.08621 4.04311C6.08621 2.91473 5.17148 2 4.04311 2C2.91473 2 2 2.91473 2 4.04311C2 5.17148 2.91473 6.08621 4.04311 6.08621ZM4.04311 8.08621C6.27605 8.08621 8.08621 6.27605 8.08621 4.04311C8.08621 1.81016 6.27605 0 4.04311 0C1.81016 0 0 1.81016 0 4.04311C0 6.27605 1.81016 8.08621 4.04311 8.08621Z" fill="#E02025"/>
      </svg>

      <span class="w-full leading-5">
        {{item}}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    model: Array,
  },

  computed: {}
}
</script>

<style lang="scss" module>

</style>
