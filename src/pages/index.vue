<template>
  <!--
    Во vue3 можно обойтись и без этого контейнера в целом, во vue2 есть библиотека Fragment,
    но для тестового решил не грузить зависимости
   -->
  <div class="w-full pb-[20px] xl:pb-5 2xl:pb-[30px]">

    <div class="container py-[20px] xl:py-5 2xl:py-[30px]">
      <!--
        Я не использую трюки vue-router, потому что могут возникнуть проблемы с i18n
        Также не добавляю в layouts заголовок, так как на реальном проекте, при развитии продукта
        могут возникнуть проблемы
      -->
      <h1 class="font-bold md:font-medium text-20 md:text-26 2xl:text-36 text-primary">Валютный калькулятор</h1>

      <div class="flex flex-col md:flex-row items-start md:space-x-7 xl:space-x-10 2xl:space-x-[36px] mt-6 md:mt-5 xl:mt-[30px] 2xl:mt-10">
        <TheCalculate class="w-full"/>
        <TheLoremIpsumBanner class="w-full mt-[17px] md:mt-0"/>
      </div>

    </div>
    <div class="md:container">
      <TheHelpBanner/>
    </div>
  </div>
</template>
