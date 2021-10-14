<template>
  <div>
    <p v-if="hasError">Um error aconteceu</p>
    <p v-if="isLoading">Carregando</p>

    <template v-if="posts.length && !isLoading">
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </template>

    <p v-if="!posts.length && !isLoading">Nenhum post :(</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { state } from '../../stores/posts';

@Component({
  name: 'content',
  components: {},
  computed: {
    posts() {
      return state.posts;
    },
    isLoading() {
      return state.isLoading;
    },
    hasError() {
      return state.hasError;
    },
  },
})
export default class Header extends Vue {}
</script>
<style scoped>
div {
  display: flex;
  border: 1px solid red;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
}
h1 {
  padding: 10px;
}
</style>
