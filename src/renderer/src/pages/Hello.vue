<script setup lang="ts">
import { ref } from 'vue'
import { getData } from '../api/user.ts'
const a = ref(0)

const get = () => {
  getData('林杰')
    .then((res: never) => {
      console.log(res)
    })
    .catch((err: never) => {
      console.log(err)
    })
}
</script>

<template>
  <div>Hello World{{ a }}</div>
  <el-button type="primary" size="default" @click="get()">获取数据</el-button>
</template>
