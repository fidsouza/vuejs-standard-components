<template>
  <div>
    <custom-header></custom-header>
    <Content />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setEmail } from '../stores/users';
import { setPosts, setLoading, setError } from '../stores/posts';

import Header from './components/Header.vue';
import Content from './components/Content.vue';

@Component({
  name: 'app',
  components: {
    customHeader: Header,
    Content,
  },
  mounted() {
    setTimeout(async () => {
      try {
        setLoading(true);
        const posts = await this.$services.posts.getAll();
        setPosts(posts);
      } catch (err) {
        setError(!!err);
      } finally {
        setLoading(false);
      }
      setEmail('filipe_costa@hotmail.com');
    }, 2000);
  },
})
export default class App extends Vue {}
</script>
