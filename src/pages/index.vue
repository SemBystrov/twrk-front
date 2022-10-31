<template>
  <div>
    <!--
      Я не использую трюки vue-router, потому что могут возникнуть проблемы с i18n
      Также не добавляю в layouts заголовок, так как на реальном проекте, при развитии продукта
      могут возникнуть проблемы
    -->
    <h1>Валютный калькулятор</h1>

    <div>
      <div>
        <TheCalculate/>
      </div>
      <TheLoremIpsumBanner/>
    </div>

    <TheHelpBanner/>
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
