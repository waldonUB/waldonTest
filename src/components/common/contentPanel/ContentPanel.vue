<template>
  <div class="panel-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentPanel'
}
</script>

<style scoped>
  .panel-wrapper {
    background: rgba(255,255,255,1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
  }
</style>
