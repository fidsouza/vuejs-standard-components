<template>
  <div>
    <custom-header></custom-header>
    <Content />
    <loading />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setEmail } from '../stores/users';
import { setPosts, setLoading, setError } from '../stores/posts';
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Loading from './components/Loading.vue';

@Component({
  name: 'app',
  components: {
    customHeader: Header,
    Content,
    Loading,
  },
  mounted() {
    setTimeout(async () => {
      try {
        setLoading(true);
        const posts = await this.$services.posts.getAll();
        setPosts(posts);
      } catch (err) {
        console.log(err);

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
