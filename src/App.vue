<template>
  <div id="app">
    <div class="min-h-screen overflow-auto">
      <div class="flex flex-wrap">
        <div class="p-2 w-64">
          <abc-input v-model="str" label="Text" />
        </div>
        <div class="p-2 w-64">
          <abc-input
            v-model="str"
            label="Text: error with message"
            error="Errorone molto lungo che così va a capo e vediamo subito come si comporta"
          />
        </div>
        <div class="p-2 w-64">
          <abc-input v-model="str" label="Text: error, no message" :error="true" />
        </div>
        <div class="p-2 w-64 ">
          <abc-dropdown v-model="str" label="DropDown">
            <template #options>
              <button
                @click="str = el"
                class="w-full text-center px-2 py-1 hover:bg-primary-200 "
                v-for="el in list"
                :key="el"
              >{{el}}</button>
            </template>
          </abc-dropdown>
        </div>
        <div class="p-2 w-64">
          <abc-button @click="showModal = true"> Open Modal </abc-button>
        </div>
      </div>
    </div>
    <abc-modal v-if="showModal" title="Beautiful Modal" @close="showModal = false">
      <template #body>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </template>
      <template #footer>
        <abc-button isSecondary class="mx-2" @click="showModal = false">Cancel</abc-button>
        <abc-button class="mx-2" @click="showModal = false">Save</abc-button>
      </template>
    </abc-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AbcInput from "./components/AbcInput.vue";
import AbcModal from "./components/AbcModal.vue";
import AbcDropdown from "./components/AbcDropdown.vue";
import AbcButton from "./components/AbcButton.vue";

@Component({
  components: {
    AbcInput,
    AbcModal,
    AbcDropdown,
    AbcButton
  }
})
export default class InputsDev extends Vue {
  str = "ciao";
  showModal = false;
  list = ["ciao", "guarda", "come", "mi diverto"];
}
</script>
