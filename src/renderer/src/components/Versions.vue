<script setup lang="ts">
import { reactive, ref } from 'vue'

const versions = reactive({ ...window.electron.process.versions })
const count = ref(0)
</script>

<template>
  <ul class="versions">
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
    <li class="node-version">Node v{{ versions.node }}</li>
  </ul>
  <div>
    <el-button type="success" @click="count++">count is {{ count }}</el-button>
  </div>
</template>
