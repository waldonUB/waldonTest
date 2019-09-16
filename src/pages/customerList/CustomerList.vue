<template>
  <div>
    <content-header>
      <template #headerLeft>客户列表</template>
      <template #headerRight>
        <btn-success>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-11"></use>
          </svg>
          <span>客户录入</span>
        </btn-success>
      </template>
    </content-header>
    <content-panel>
      <section class="panel-body">
        <ul class="tabs">
          <li>跟进库</li>
          <li>淘汰库</li>
        </ul>
      </section>
    </content-panel>
  </div>
</template>

<script>
import ContentHeader from '@components/common/contentHeader/ContentHeader'
import BtnSuccess from '@components/common/btn/BtnSuccess'
import ContentPanel from '@components/common/contentPanel/ContentPanel'
export default {
  name: 'CustomerList',
  components: {ContentHeader, BtnSuccess, ContentPanel}
}
</script>

<style lang="scss" scoped>
  @mixin to-flex($direction) {
    display: flex;
    flex-flow: $direction nowrap;
  }
  .panel-body {
    .tabs {
      @include to-flex(row);
      box-sizing: border-box;
      position: relative;
      color: #333;
      list-style: none;
      margin: 0;
      padding: 0;
      &:after {
        width: 102%;
        height: 1px;
        content: "";
        background: #eee;
        position: absolute;
        top: 43px;
        left: -1%;
      }
      li {
        margin-right: 60px;
        padding-bottom: 17px;
      }
    }
  }
</style>
