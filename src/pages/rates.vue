<template>
  <div>
    <!--
      Я не использую трюки vue-router, потому что могут возникнуть проблемы с i18n
      Также не добавляю в layouts заголовок, так как на реальном проекте, при развитии продукта
      могут возникнуть проблемы
    -->
    <h1>Курс рубля</h1>

    <div>
      <TheCurrencyBanner/>
      <TheCurrencyBanner/>
      <TheCurrencyBanner/>
    </div>

    <TheContactBanner/>
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
