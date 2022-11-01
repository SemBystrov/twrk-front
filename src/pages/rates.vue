<template>
  <div class="container py-[20px] xl:py-[36px] 2xl:py-[30px]">
    <!--
      Я не использую трюки vue-router, потому что могут возникнуть проблемы с i18n
      Также не добавляю в layouts заголовок, так как на реальном проекте, при развитии продукта
      могут возникнуть проблемы
    -->
    <h1 class="font-bold md:font-medium text-20 md:text-26 2xl:text-36 text-primary mb-10">Курс рубля</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-[30px]">
      <TheCurrencyBanner
        v-for="currency in this.$store.getters['currency/getCurrency']"
        :key="`currency-${currency.charCode}`"
        :currency="currency"
      />
    </div>

    <TheContactBanner class="mt-4 md:mt-[30px] xl:mt-12 2xl:mt-[30px]"/>
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
