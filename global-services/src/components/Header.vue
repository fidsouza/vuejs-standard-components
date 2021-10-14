<template>
  <div>
    <h1>Vue Global</h1>
    <p v-if="!hasUserLogged">Not user logged</p>
    <p v-else>Current User is : {{ currentUserLogged }}</p>
  </div></template
>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { state } from '../../stores/users';

@Component({
  name: 'header',
  components: {},
  computed: {
    hasUserLogged() {
      return !!state.currentState.email;
    },
    currentUserLogged() {
      return state.currentState.email;
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
