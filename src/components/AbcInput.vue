<template>
    <div>
        <div v-if="label" class="mb-2" :class="{ 'text-error': error }">
            <label :for="myId">{{ label }}</label>
        </div>
        <div class="flex content-center border py-1" :class="inputClass">
            <div v-if="leftTools" class="pl-2 flex flex-none text-secondary">
                <slot name="left" />
            </div>
            <input
                :id="myId"
                type="text"
                v-model.trim="currentVal"
                @focus="focusChanged(true)"
                @blur="focusChanged(false)"
                @change="$emit('change', currentVal)"
                :disabled="isDisabled"
                :placeholder="placeHolder != null ? placeHolder : ''"
                class="px-2 flex-1 w-full focus:outline-none bg-transparent"
            />
            <div v-if="rightTools" class="pr-2 flex flex-none text-secondary">
                <slot name="right" />
            </div>
        </div>
        <div v-if="error && typeof error == 'string'" class="text-xs text-error">
            {{ error }}
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import ID from "@/ID";

@Component
export default class AbcInput extends Vue {
    @Prop({ type: Boolean }) leftTools!: boolean;
    @Prop({ type: Boolean }) rightTools!: boolean;
    @Prop() id!: string | null;
    @Prop({ default: null }) label!: string | null;
    @Prop({ default: null }) error!: string | boolean | null;
    @Prop() value!: string | null;
    @Prop({ type: Boolean }) isDisabled!: boolean;
    @Prop({ default: null }) placeHolder!: string | null;

    private haveFocus = false;

    private get currentVal(): string | null {
        if (this.value === null || this.value === undefined) {
            return null;
        }

        return this.value;
    }

    private set currentVal(val: string | null) {
        this.$emit("input", val);
    }

    private get myId(): string {
        return this.id || ID.next();
    }

    private get inputClass(): { [key: string]: boolean } {
        return {
            "border-primary-500": this.haveFocus,
            "border-error": !!this.error && !this.haveFocus,
            "bg-gray-200": this.isDisabled
        };
    }

    private focusChanged(on: boolean) {
        this.haveFocus = on;
    }

}
</script>
