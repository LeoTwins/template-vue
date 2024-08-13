<script lang="ts" setup>
import BatsuButton from "@/components/elements/button/BatsuButton.vue";

defineProps<{
  label: string;
}>();
</script>

<template>
  <li>
    {{ label }}
    <BatsuButton
      @click="
        () => {
          console.log('hello category item click!');
        }
      "
    ></BatsuButton>
  </li>
</template>
