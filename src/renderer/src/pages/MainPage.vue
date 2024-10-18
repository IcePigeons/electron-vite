<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function skip() {
  router.push('/hello')
}
</script>

<template>
  <div>this is MainPage</div>
  <el-button type="success" @click="skip()">跳转</el-button>
</template>
