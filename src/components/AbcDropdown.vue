<template>
  <div class="relative z-20 w-full">
    <div v-if="label" class="mb-2" :class="{ 'text-error': error }">
      <label :for="myId">{{ label }}</label>
    </div>
    <div @click="isOpen = !isOpen" class="relative">
      <slot name="input">
        <div class="bg-white border cursor-pointer">
          <div class="px-4 py-1 mr-3">{{curValue}}</div>
        </div>
      </slot>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary"
      >
        <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 h-screen w-screen"></div>
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="absolute py-2 bg-white shadow-xl max-h-10 overflow-auto w-full"
    >
      <slot name="options" />
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class AbcDropdown extends Vue {
  @Prop() readonly value!: string;
  @Prop() readonly label!: string;
  @Prop({default: "default"}) defaultValue!: string;

  isOpen = false;

  get curValue() {
    if (!this.value) {
      return this.defaultValue;
    }
    return this.value;
  }

  set curValue(val) {
    this.$emit("input", val);
  }
}
</script>
