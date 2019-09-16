<template>
  <div class="yx-wrapper">
    <top></top>
    <content-box></content-box>
  </div>
</template>

<script>
import Top from '@components/top/Top'
import ContentBox from '@components/content/ContentBox'
export default {
  name: 'Home',
  components: {Top, ContentBox}
}
</script>

<style scoped>
  .yx-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }
</style>
