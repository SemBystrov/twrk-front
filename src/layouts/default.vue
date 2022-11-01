<template>
  <div class="w-screen h-screen bg-background font-roboto">
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
