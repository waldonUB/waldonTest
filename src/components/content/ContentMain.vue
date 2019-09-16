<template>
  <div class="content-main">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ContentMain'
}
</script>

<style scoped>
  .content-main {
    position: absolute;
    left: 190px;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f7f7f7;
    overflow: auto;
    padding: 20px;
  }
</style>
