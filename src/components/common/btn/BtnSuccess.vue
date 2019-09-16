<template>
  <div class="btn-success">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BtnSuccess'
}
</script>

<style scoped>
.btn-success {
  min-width: 80px;
  height: 34px;
  padding: 0 16px;
  line-height: 34px;
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  background: rgba(0,187,114,1);
  color: rgba(255,255,255,1);
}
</style>
