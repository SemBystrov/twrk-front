<template>
  <div class="w-screen h-screen bg-background">
    <TIMenu :model="menuModel"/>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuModel: [
      {
        label: "Калькулятор",
        path: "/"
      },
      {
        label: "Курс рубля",
        path: "/rates"
      }
    ]
  }),

  async fetch () {
    await this.$store.dispatch('currency/fetchCurrency')
  }
}
</script>

<style lang="scss">

</style>
