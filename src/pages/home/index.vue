<template>
  <view>
    <div class="name">用户名:{{ name }}</div>
  </view>
</template>

<script setup lang="ts">
// import { useUserStore } from "@/store";
const { name } = useStore("user");
</script>
