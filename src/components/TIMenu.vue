<template>
  <!-- Очень странные перепады высоты, но что поделать, тз есть тз -->
  <div class="w-screen bg-gray h-[50px] md:h-10 2xl:h-[46px] flex items-center px-">
    <div class="container">
      <TIMenuItem
        v-for="(item, index) in model"
        :key="`item-${index}`"
        :path="item.path"
        :label="item.label"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: Array
  }
}
</script>

<style lang="scss" module>

</style>
