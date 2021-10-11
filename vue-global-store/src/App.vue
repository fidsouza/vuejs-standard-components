<template>
  <div><custom-header></custom-header></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setEmail, state } from '../stores/users';
import Header from './components/Header.vue';

@Component({
  name: 'app',
  components: {
    customHeader: Header,
  },
  mounted() {
    setTimeout(() => {
      setEmail('filipe_costa@hotmail.com');
    }, 2000);
  },
})
export default class App extends Vue {}
</script>
