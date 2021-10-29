<template><component :is="component" /></template>

<script>
import ModalLogin from "./ModalLogin.vue";
import Modal from "./Modal.vue";
export default {
  components: {
    ModalLogin,
    Modal,
  },
  props: {
    component: { type: String, required: true },
  },
};
</script>
