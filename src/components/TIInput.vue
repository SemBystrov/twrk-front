<template>
  <div>
    <label :for="id">{{label}}</label>
    <input
      :value="value"
      type="number"
      @input="$emit('input', $event.target.value)"
      :id="id"
    />
  </div>
</template>

<script>
import {TIInputLabelMixin} from "~/mixins/TIInputLabelMixin";

export default {
  mixins: [TIInputLabelMixin],
  props: {
    value: [Number]
  }
}
</script>

<style lang="scss" module>

</style>
