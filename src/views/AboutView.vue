<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="mb-3">
      <button @click="decrement()">-</button>
      <span class="mx-3">{{ count }}</span>
      <button @click="increment()">+</button>
    </div>
    <div class="flex justify-center gap-3">
      <button @click="login">Login</button>
      <button @click="removeToken()">Logout</button>
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
