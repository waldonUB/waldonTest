<template>
  <div class="content-header">
    <div class="header-left">
      <slot name="headerLeft"></slot>
    </div>
    <div class="header-right">
      <slot name="headerRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentHeader'
}
</script>

<style lang="scss" scoped>
  .content-header {
    width: 100%;
    overflow: hidden; // clear: both
    margin-bottom: 20px;
    .header-left {
      height: 34px;
      line-height: 34px;
      font-size: 16px;
      font-weight: bold;
      color: rgb(0, 0, 0);
      float: left;
    }
    .header-right {
      float: right;
    }
  }
</style>
