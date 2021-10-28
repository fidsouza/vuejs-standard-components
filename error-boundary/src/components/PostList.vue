<template>
  <h1>Post Lists</h1>
</template>

<script lang="ts">
import Vue from 'vue';

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve([
      //   { id: 1, title: 'primeiro post' },
      //   { id: 2, title: 'segundo post' },
      // ]);
      reject(new Error('api fora, tente novamente.'));
    }, 5000);
  });
}
export default Vue.extend({
  async mounted() {
    const posts = await getPosts();
    console.log(posts);
  },
});
</script>

<style></style>
