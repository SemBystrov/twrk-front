<template>
  <div class="w-screen h-screen overflow-x-hidden bg-background font-roboto leading-none">
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
