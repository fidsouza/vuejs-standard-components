<template>
  <div class="container">
    <h1>Scoped Slots</h1>
    <with-mouse>
      <div
        class="box"
        slot-scope="{ coords }"
        :style="{ left: `${coords.x - 75}px`, top: `${coords.y - 75}px` }"
      ></div>
    </with-mouse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WithMouse from './components/WithMouse.vue';

export default Vue.extend({
  components: { WithMouse },
  name: 'App',
});
</script>

<style>
@keyframes blink {
  from {
    background-color: tomato;
  }
  to {
    background-color: aqua;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
.container {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}
.box {
  position: absolute;
  background-color: tomato;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: blink 400ms ease-in infinite;
}
</style>
