<template>
  <div class="w-screen h-screen bg-background">
    <TIMenu :model="menuModel"/>

    <div class="px-2xl py-xl">
      <Nuxt/>
    </div>
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
  })
}
</script>

<style lang="scss">

</style>
