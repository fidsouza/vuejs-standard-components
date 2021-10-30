<template>
  <div class="loading" v-if="status">
    <p>Loading</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return { status: false };
  },
  created(): void {
    this.$g.loading.onToogle(({ payload }: { payload: boolean }) => {
      console.log('toggled');
      console.log(this);
      this.status = payload;
    });
  },

  destroyed(): void {
    this.$g.loading.off();
  },
});
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: white;
  font-weight: 800;
  font-size: 44px;
}
</style>
