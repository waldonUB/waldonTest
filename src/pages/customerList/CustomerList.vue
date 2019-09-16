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
        <ul class="base-tabs">
          <li class="tab-pane" v-for="(item, index) of customerTypeList"
              :key="item.code" :class="{isActive: item.code === currentType}"
              @click="changeCusType(item.code, index)">
            {{item.label}}
          </li>
          <li class="tab-pane tabs-slider" :style="{left: baseLeftPoint}"></li>
        </ul>
        <ul class="tag-tabs">
          <li class="tab-pane" v-for="(item, index) of tagList"
              :key="item.code" :class="{isActive: item.code === currentTag}"
              @click="changeTagType(item.code, index)">
            {{item.label}}
          </li>
          <li class="tab-pane tabs-slider" :style="{width: tagWidth, left: tagLeftPoint}"></li>
        </ul>
        <div class="select-box">
          <input type="text" class="select-option">
          <input type="text" class="small-input" placeholder="联系人">
          <input type="text" class="middle-input" placeholder="联系手机">
          <input type="text" class="middle-input" placeholder="联系QQ">
          <btn-success>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-4"></use>
            </svg>
            <span>搜索</span>
          </btn-success>
        </div>
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
  components: {ContentHeader, BtnSuccess, ContentPanel},
  data () {
    return {
      currentType: 'followBase',
      currentTag: 'all',
      customerTypeList: [{
        code: 'followBase',
        label: '跟进库'
      }, {
        code: 'getOutBase',
        label: '淘汰库'
      }],
      tagList: [{
        code: 'all',
        label: '全部'
      }, {
        code: 'contacted',
        label: '已联系'
      }, {
        code: 'noContact',
        label: '未联系'
      }],
      baseLeftPoint: 0, // 库：初始化下标为0
      tagLeftPoint: 0, // 标签：初始化下标为0
      tagWidth: '28px'
    }
  },
  methods: {
    /**
     * 改变库的类型：1.跟进库 2.淘汰库
     * */
    changeCusType (code, index) {
      this.currentType = code
      this.baseLeftPoint = (index * 120) + 'px'
    },
    /**
     * 改变标签的类型：1.全部 2.已联系 3.未联系
     * */
    changeTagType (code, index) {
      this.currentTag = code
      if (index === 0) {
        this.tagLeftPoint = 0
      } else {
        this.tagLeftPoint = 57 + ((index - 1) * 71) + 'px'
      }
      if (code !== 'all') {
        this.tagWidth = '42px'
      } else {
        this.tagWidth = '28px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin to-flex($direction) {
    display: flex;
    flex-flow: $direction nowrap;
  }
  @mixin slider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 48px;
    height: 3px;
    background: rgba(0, 187, 114, 1);
  }
  @mixin tabs {
    box-sizing: border-box;
    position: relative;
    color: #333;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .panel-body {
    .base-tabs {
      @include to-flex(row);
      @include tabs;
      &:after {
        width: 102%;
        height: 1px;
        content: "";
        background: #eee;
        position: absolute;
        top: 43px;
        left: -1%;
      }
      .tab-pane {
        width: 60px;
        height: 26px;
        line-height: 26px;
        margin-right: 60px;
        padding-bottom: 17px;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        &.tabs-slider {
          @include slider;
          padding-bottom: 0;
        }
        &.isActive {
          color: #00BB72;
        }
      }
    }
    .tag-tabs {
      @include to-flex(row);
      @include tabs;
      padding: 34px 0 28px 0;
      .tab-pane {
        max-width: 70px;
        height: 26px;
        margin-right: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        padding: 0 2px;
        font-weight: 400;
        line-height: 26px;
        cursor: pointer;
        &.tabs-slider {
          @include slider;
          bottom: 28px;
        }
        &.isActive {
          color: #00BB72;
        }
      }
    }
    .select-box {
      @include to-flex(row);
      height: 34px;
      margin-bottom: 20px;
      input {
        border-radius: 5px;
        margin-right: 10px;
        outline: 0;
        padding: 0 10px;
        border: 1px solid rgba(238, 238, 238, 1);
        font: 400 13.3333px Arial;
        &:hover {
          border: 1px solid #00BB72;
        }
        &:focus {
          border: 1px solid #00BB72;
        }
        &::placeholder {
          color: rgba(196, 196, 204, 1);
        }
        &.select-option {
          width: 120px;
        }
        &.small-input {
          width: 120px;
        }
        &.middle-input {
          width: 150px;
        }
      }
    }
  }
</style>
