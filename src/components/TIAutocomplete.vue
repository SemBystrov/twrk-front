<template>
  <div class="relative flex flex-col">
    <label
      :for="id"
      class="text-14 2xl:text-16 font-medium text-text-dark"
    >
      {{label}}
    </label>
    <input
      v-model="model"
      :id="id"
      @focusin="showOptions"
      @focusout="hiddenOptions"
      @input="updateValue"
      class="mt-3 border border-border-gray rounded-[5px] p-5 text-12 2xl:text-14"
      placeholder="Введите название или код"
    />
    <transition>
      <ul
        v-if="options !== null && showOptionsModel"
        class="absolute rounded-[5px] w-full shadow-lorem select-none bg-gray top-[86px] 2xl:top-[90px] z-10"
      >
        <li
          v-for="option in options"
          :key="`${id}-option-${option.charCode}`"
          class="px-4 py-2 hover:bg-secondary cursor-pointer"
          @mousedown="select(option)"
        >
          <span class="font-bold">{{option.charCode}}</span> - {{option.name}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import {TIInputLabelMixin} from "~/mixins/TIInputLabelMixin";

export default {
  mixins: [TIInputLabelMixin],
  props: {
    value: [Object, null]
  },
  data: () => ({
    model: "",
    showOptionsModel: true
  }),
  methods: {
    select (option) {
      this.model = option.charCode
      this.$emit("input", option)
      this.hiddenOptions()
    },
    showOptions () {
      this.showOptionsModel = true
    },
    hiddenOptions () {
      this.showOptionsModel = false
    },
    updateValue () {
      const currency = this.$store.getters["currency/getCurrency"].find((item) => item.charCode === this.model)
      this.$emit("input", currency? currency : null)
    }
  },
  computed: {
    options: ({$store, model}) => {
      if (model === "")
        return null

      const search = model.toLowerCase().replace(" ", "")

      return $store.getters["currency/getCurrency"].filter(item =>
          item.charCode.toLowerCase().replace(" ", "").includes(search) ||
          item.name.toLowerCase().replace(" ", "").includes(search)
      )
    }
  }
}
</script>

<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
