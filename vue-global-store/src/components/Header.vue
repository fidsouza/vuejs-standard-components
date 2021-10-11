<template>
  <div>
    <h1>Vue Global</h1>
    <p>Current User is : {{ currentUserEmail }}</p>
  </div></template
>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { state } from '../../stores/users';

@Component({
  name: 'header',
  components: {},
  computed: {
    currentUserEmail() {
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
