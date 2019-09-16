<template>
  <div class="content-box">
    <nav-menu></nav-menu>
    <content-main></content-main>
  </div>
</template>

<script>
import NavMenu from '@components/nav/NavMenu'
import ContentMain from '@components/content/ContentMain'
export default {
  name: 'ContentBox',
  components: {NavMenu, ContentMain}
}
</script>

<style scoped>
  .content-box {
    position: absolute;
    top: 68px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
