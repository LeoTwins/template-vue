<script lang="ts" setup>
import BaseButton from "./BaseButton.vue";

defineEmits<{
  click: [];
}>();
</script>
<template>
  <BaseButton @click="$emit('click')">
    <span class="batsu"></span>
  </BaseButton>
</template>

<style scoped>
.batsu {
  display: block;
  position: relative;
  width: 5px;
  height: 5px;
  margin-left: 20px;
}

.batsu::before,
.batsu::after {
  /* 共通設定 */
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px; /* 棒の幅（太さ） */
  height: 10px; /* 棒の高さ */
  background: #333;
}

.batsu::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.batsu::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
