<template>
  <div class="btn-normal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BtnNormal'
}
</script>

<style lang="scss" scoped>
.btn-normal {
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  color: #00bb72;
  &:hover {
    color: rgba(0, 160, 98, 1);
  }
}
</style>
