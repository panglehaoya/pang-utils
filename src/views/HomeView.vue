<template>
  <div class="home">home</div>
</template>

<script lang="ts" setup>
import { uuid } from "@/utils/uuid";
import { formatDate } from "@/utils";

console.log(uuid(8, 10));
console.log(formatDate(Date.now(), "YYYY-MM-DD HH:MM"));
</script>
