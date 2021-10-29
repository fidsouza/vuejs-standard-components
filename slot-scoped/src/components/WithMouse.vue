<template>
  <div class="container" @mousemove="handleEvent">
    <slot :coords="{ x, y }" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    x: window.innerHeight * 0.5,
    y: window.innerWidth * 0.5,
  }),
  methods: {
    handleEvent(event: MouseEvent) {
      const { clientX, clientY } = event;
      this.x = clientX;
      this.y = clientY;
    },
  },
});
</script>
