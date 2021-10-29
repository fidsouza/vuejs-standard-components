<template>
  <div>
    <h1>Factory</h1>
    <modal-factory component="ModalLogin"></modal-factory>
  </div>
</template>

<script>
import ModalFactory from "./components/ModalFactory.vue";

export default {
  name: "App",
  components: { ModalFactory },
};
</script>
