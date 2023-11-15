<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click="DECREMENT">-</button>
      <span>{{ count }}</span>
      <button @click="INCREMENT">+</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
  },
})
</script>
