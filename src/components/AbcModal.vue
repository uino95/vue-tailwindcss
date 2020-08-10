<template>
  <div class="fixed inset-0 h-screen w-screen z-20" @keypress.enter="submit">

    <div @click.stop="close" class="opacity-50 bg-black fixed inset-0 h-screen w-screen"></div>

    <div class="relative center bg-white w-sm rounded shadow-lg">
      <div class="px-6 py-4 flex items-center border-b">
        <div class="font-bold text-xl mb-2">{{title}}</div>
        <button class="absolute top-0 right-0 mr-2 mt-2" @click="close">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="px-6 py-4 overflow-auto max-h-md lg:max-h-lg xl:max-h-xl">
        <slot name="body" />
      </div>
      <div class="px-6 py-4 flex justify-end border-t">
        <slot name="footer" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class AbcModal extends Vue {
  @Prop() readonly title!: string;

  close(){
      this.$emit("close");
  }

  submit(){
      this.$emit("submit");
  }
}
</script>

<style scoped>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
