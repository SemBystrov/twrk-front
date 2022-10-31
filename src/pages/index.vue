<template>
  <!--
    Во vue3 можно обойтись и без этого контейнера в целом, во vue2 есть библиотека Fragment,
    но для тестового решил не грузить зависимости
   -->
  <div class="w-full">

    <div class="container py-[20px] xl:py-5 2xl:py-[30px]">
      <!--
        Я не использую трюки vue-router, потому что могут возникнуть проблемы с i18n
        Также не добавляю в layouts заголовок, так как на реальном проекте, при развитии продукта
        могут возникнуть проблемы
      -->
      <h1 class="font-bold md:font-medium text-34 text-primary">Валютный калькулятор</h1>

      <div class="flex">
        <TheCalculate/>
        <TheLoremIpsumBanner/>
      </div>

    </div>
    <TheHelpBanner class="md:container"/>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),

  computed: {

  }
}
</script>

<style lang="scss" module>

</style>
