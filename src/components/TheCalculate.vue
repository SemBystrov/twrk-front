<template>
  <div class="flex flex-col space-y-5 space-y-[30px]">
    <TIAutocomplete v-model="from" id="from" label="Валюта 1"/>
    <TIAutocomplete v-model="to" id="to" label="Валюта 2"/>
    <TIInput v-model="count" id="count" label="Количество"/>
    <TheSumBanner class="mt-5 md:mt-6 xl:mt-5 2xl:mt-[30px]" :sum="sum"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    from: null,
    to: null,
    count: null
  }),

  computed: {
    sum: ({from, to, count}) => {
      if (from === null || to === null || count === null)
        return null

      return count * ((from.value * to.nominal) / (from.nominal * to.value))
    }
  }
}
</script>
