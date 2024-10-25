<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ currentLang == 'zhCn' ? '中文' : 'English' }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zhCn" :disabled="currentLang == 'zhCn'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLang == 'en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const i18n = useI18n()

// 计算属性获取i18n的值
const currentLang = computed(() => i18n.locale.value)

// 切换语言
function handleCommand(command: string) {
  i18n.locale.value = command
}
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
