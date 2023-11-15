<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click="DECREMENT()">-</button>
      <span class="mx-3">{{ count }}</span>
      <button @click="INCREMENT()">+</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useState, useMutations } from 'vuex-composition-helpers'
const { count } = useState(['count'])
const { INCREMENT, DECREMENT } = useMutations(['INCREMENT', 'DECREMENT'])
</script>
