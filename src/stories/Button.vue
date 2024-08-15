<template>
  <button type="button" :class="classes" @click="$emit('click')" :style="style">{{ label }}</button>
</template>

<script lang="ts" setup>
import "./button.css";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean;
    /**
     * size of the button
     */
    size?: "small" | "medium" | "large";
    /**
     * background color of the button
     */
    backgroundColor?: string;
  }>(),
  { primary: false }
);

defineEmits<{
  click: [];
}>();

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));
</script>
