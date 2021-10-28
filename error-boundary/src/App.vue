<template>
  <div>
    <loading />
    <custom-header></custom-header>
    <error-boundary :fallback="fallbackComponent">
      <PostList />
    </error-boundary>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import CustomHeader from './components/Header.vue';
import Loading from './components/Loading.vue';
import PostList from './components/PostList.vue';
import ErrorBoundary from './components/ErrorBoundary.vue';
import Fallback from './components/Fallback.vue';

export default Vue.extend({
  name: 'app',
  components: {
    customHeader: CustomHeader,
    Loading,
    PostList,
    ErrorBoundary,
  },
  data() {
    return { fallbackComponent: Fallback };
  },
  props: {
    fallback: {
      type: Object,
      required: true,
    },
  },
});
</script>
