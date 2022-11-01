<template>
  <div class="
    grid grid-cols-4 md:grid-cols-1 xl:grid-cols-2
    gap-x-[7px] md:gap-y-[5px] xl:gap-x-[11px] xl:gap-y-2
    2xl:gap-x-[15px] 2xl:gap-y-[10px]
  ">

    <!--
      Конечно, изображения можно обработать по разному (подгружать картинки одним изображением,
      вставить на фон с помощью css и т.д., зависит от множества деталей). Ещё сюда бы добавил
      ленивую загрузку, но пока остановлюсь...

      Пришёл к ratio, потому что использую обычно tailwind3, там он предустановлен.

      Что, ещё, хорошо бы обработать изображения, чтобы сделать картинки по размеру под разные формата экрана, а то
      эти большие. Я работал с directus и cloudinary для отдачи статики, с ними удобно создать свой
      компонент-обёртку для изображений, быстро прокинуть путь к файлу и уже дальше внутри компонента
      подгрузится необходимый размер.

      В общем вариантов обработать подобные картинки - множество. Это лишь один из них:
     -->
    <div class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tr-[15px] rounded-bl-[15px]
                 xl:rounded-tr-none xl:rounded-bl-none
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-1.jpg')">
    </div>
    <div class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tl-[15px] rounded-br-[15px]
                 xl:rounded-tl-none xl:rounded-br-none xl:rounded-tr-[50px]
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-2.jpg')">
    </div>
    <div class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tr-[15px] rounded-bl-[15px]
                 md:rounded-tr-none md:rounded-bl-none md:rounded-tl-[15px] md:rounded-br-[15px]
                 xl:rounded-tl-none xl:rounded-br-none xl:rounded-bl-[50px]
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-3.jpg')">
    </div>
    <div class="w-full overflow-hidden aspect-w-43 aspect-h-29 xl:aspect-w-1 xl:aspect-h-1
                 rounded-tl-[15px] rounded-br-[15px]
                 xl:rounded-tl-none xl:rounded-br-none
    ">
      <img class="object-cover h-full" :src="require('~/assets/images/img-4.png')">
    </div>
  </div>
</template>
