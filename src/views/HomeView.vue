<template>
  <div class="home">home</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { urlToBase64, dataURLtoBlob } from "@/utils";
import { handleDate } from "@/utils";
import dayjs from "dayjs";
// const date = new Date(2022, 2, 2);
// const dateAdd = handleDate("add", 1, "day", date);
// console.log(dateAdd);
console.log(dayjs(new Date(2022, 2, 2)).add(1, "day").$d);
</script>
