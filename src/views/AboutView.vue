<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="mb-3">
      <VanButton type="danger" size="small" @click="decrement()">
        <template #icon><VanIcon name="minus" /></template>
      </VanButton>
      <span class="mx-3">{{ count }}</span>
      <VanButton type="primary" size="small" @click="increment()">
        <template #icon><VanIcon name="plus" /></template>
      </VanButton>
    </div>
    <div class="flex justify-center gap-3">
      <VanButton @click="login">Login</VanButton>
      <VanButton @click="removeToken()">Logout</VanButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useState, useMutations } from 'vuex-composition-helpers'
import { request } from '@/api'
const { count } = useState(['count'])
const { increment, decrement } = useMutations(['increment', 'decrement'])
const { setToken, removeToken } = useMutations('user', ['setToken', 'removeToken'])
const login = async () => {
  const res = await request('/api/login', { method: 'POST' })
  setToken(res.data)
}
</script>
