<template>
  <div class="btn-default">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BtnDefault'
}
</script>

<style lang="scss" scoped>
.btn-default {
  min-width: 34px;
  height: 34px;
  font-size: 14px;
  font-weight: 400;
  display: inline-flex;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  background: rgba(255,255,255,1);
  border: 1px solid rgba(218, 218, 218, 1);
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
}
</style>
