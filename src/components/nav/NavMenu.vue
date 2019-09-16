<template>
  <div class="yx-menu">
    <ul>
      <li @click="linkToView(item.code)"
          v-for="item of menuList"
          :key="item.code"
          :class="{isActive: $route.path.includes(item.code)}">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      menuList: [{
        code: 'customerList',
        label: '客户列表'
      }, {
        code: 'tagManage',
        label: '标签管理'
      }]
    }
  },
  methods: {
    linkToView (code) {
      this.$router.push({path: code})
    }
  }
}
</script>

<style lang="scss" scoped>
  .yx-menu {
    width: 190px;
    background: #272C33;
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    overflow-y: auto;
    left: 0;
    top: 0;
    bottom: 0;
    ul {
      list-style: none;
      margin: 0;
      padding: 20px 0;
      li {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 13px;
        cursor: pointer;
        &:hover {
          color: #fafafa;
        }
        &.isActive {
          color: #fafafa;
          background-color: #00BB72;
        }
      }
    }
  }
</style>
