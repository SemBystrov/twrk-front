<template>
  <div class="relative flex flex-col">
    <label :for="id">{{label}}</label>
    <input
      v-model="model"
      :id="id"
      @focus="showOptions = true"
    />
    <transition>
      <ul
        v-if="options !== null && showOptions"
        class="absolute bg-gray top-12 z-10"
      >
        <li
          v-for="option in options"
          :key="`${id}-option-${option.charCode}`"
          class="px-4 py-1"
          @click="select(option)"
        >
          <span class="font-bold">{{option.charCode}}</span> - {{option.name}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import {TIInputLabelMixin} from "~/mixins/TIInputLabelMixin";
import Currency from "~/classes/Currency";
/*
  Сделал перерыв в разработке, отвлекли
 */
export default {
  mixins: [TIInputLabelMixin],
  props: {
    value: [Currency, null]
  },
  data: () => ({
    model: "",
    showOptions: true
  }),
  methods: {
    select (option) {
      this.model = option.charCode
      this.$emit("input", option)
      this.showOptions = false
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
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
