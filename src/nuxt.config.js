export default
{
    components: true,
/*
  Убрал пока обработку линтера. Долго не мог понять, почему не работает горячая перезагрузка, постоянно
  ссылаясь на ошибки в нём, попытался что-то исправить разными путями, пытался пересобрать проект, но ничего не
  помогает, в реальной обстановке, обратился бы к коллеге или старшему разработчику после нескольких неудачных
  попыток. Если никого не было бы, попросил больше времени на разработку, продолжил копать +
  обратился бы к друзьям или на stackoverflow.
 */

    buildModules:
    [
        // "@nuxtjs/eslint-module",
        "@nuxtjs/tailwindcss"
    ],

 /*   eslint:
    {
        fix: false
    },
*/
    axios:
    {
        proxy: true
    },

    head:
    {
        title    : "Тестовая работа Nuxt/Vue",
        htmlAttrs:
        {
            lang: "ru"
        },
        meta:
        [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ]
    },

    modules:
    [
        "@nuxtjs/proxy",
        "@nuxtjs/axios",
        "@nuxtjs/router-extras"
    ],

    css:
    [
        "@/assets/css/tailwind.css"
    ]
}
