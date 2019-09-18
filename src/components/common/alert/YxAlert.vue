<template>
  <div v-show="isShow" class="alert-error">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconType"></use>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YxAlert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    timeout: {
      type: Number,
      default: 3000
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconType () {
      switch (this.type) {
        case 'success':
          return '#icon-success'
        case 'error':
          return '#icon-error'
        case 'info':
          return '#icon-info'
        case 'warn':
          return '#icon-warn'
      }
    }
  },
  watch: {
    isShow (newVal) {
      const vm = this
      if (newVal) {
        setTimeout(function () {
          vm.$emit('update:isShow', false)
        }, this.timeout)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-error {
  width: 365px;
  height: 50px;
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  border-radius: 4px;
  z-index: 9999;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: rgb(83, 83, 83);
  line-height: 50px;
  .icon {
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.2em;
  }
}
</style>
