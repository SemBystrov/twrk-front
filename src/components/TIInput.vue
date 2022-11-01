<template>
  <div class="flex flex-col">
    <label
      :for="id"
      class="text-14 2xl:text-16 font-medium text-text-dark"

    >{{label}}</label>
    <input
      v-model="model"
      type="number"
      @input="updateValue"
      :id="id"
      class="mt-3 border border-border-gray rounded-[5px] p-5 text-12 2xl:text-14"
      placeholder="Введите число"
    />
  </div>
</template>

<script>
import {TIInputLabelMixin} from "~/mixins/TIInputLabelMixin";

export default {
  mixins: [TIInputLabelMixin],
  props: {
    value: [Number, null]
  },
  data: () => ({
    model: ""
  }),
  methods: {
    updateValue () {
      if (this.model === "") {
        this.$emit('input', null)
      } else {
        this.$emit('input', Number.parseFloat(this.model))
      }
    }
  }
}
</script>

