<template>
  <TIBanner>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</h2>
    <div>
      <TIList :model="listModel"/>
      <TIImages/>
    </div>
  </TIBanner>
</template>

<script>
export default {
  data: () => ({
    listModel: [
        "incididunt ut labore et dolore magna aliqua",
        "incididunt ut labore et",
        "incididunt ut labore et dolore",
        "labore et dolore",
        "incididunt ut",
        "incididunt ut labore et dolore",
        "incididunt ut labore"
    ]
  }),

  computed: {}
}
</script>

<style lang="scss" module>

</style>
