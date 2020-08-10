<template>
    <button class="focus:outline-none border-2 border-transparent"
        :class="btnClass"
        @click.stop="onClick()"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({ type: Boolean }) isSecondary!: boolean;
    @Prop({ type: Boolean }) isSmall!: boolean;
    @Prop({ type: Boolean }) isPill!: boolean;
    @Prop({ type: Boolean }) isDisabled!: boolean;

    private get btnClass(): { [key: string]: boolean } {
        return {
            "cursor-not-allowed": this.isDisabled,
            "text-left": !this.isPill,
            "text-btn-text": true,
            "py-1": !this.isSmall,
            "px-1": this.isSmall && !this.isPill,
            "px-2": !this.isSmall || (this.isSmall && this.isPill),
            "px-4": !this.isSmall && this.isPill,
            "rounded-full": this.isPill,
            "bg-secondary": this.isSecondary,
            "bg-btn-normal": !this.isSecondary,
            "hover:bg-btn-hover": !this.isDisabled,
            "hover:text-btn-normal": !this.isDisabled,
            "hover:border-black": !this.isDisabled,
            "hover:border-2": !this.isDisabled,
            "active:bg-primary-600": !this.isDisabled,
        };
    }

    private onClick() {
        if (!this.isDisabled) {
            this.$emit('click');
        }
    }
}
</script>
