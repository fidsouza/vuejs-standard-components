<template>
  <div class="modal">
    <div class="body">
      <p>content</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.body {
  width: 500px;
  height: 400px;
  background-color: #f4f4f4;
}
p {
  color: #000;
  font-weight: 800;
  font-size: 44px;
}
</style>
