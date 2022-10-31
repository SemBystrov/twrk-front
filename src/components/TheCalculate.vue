<template>
  <div>
    <TIAutocomplete v-model="from" id="from" label="Валюта 1"/>
    <TIAutocomplete v-model="to" id="to" label="Валюта 2"/>
    <TIInput v-model="count" id="count" label="Количество"/>
    <TheSumBanner/>
  </div>
</template>

<script>
export default {
  data: () => ({
    from: null,
    to: null,
    count: 0
  }),

  computed: {}
}
</script>

<style lang="scss" module>

</style>
