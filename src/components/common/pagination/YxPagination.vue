<template>
  <div class="pagination-wrapper">
    <div class="left-part">
      <span>共有{{pageParams.total}}条记录，每页显示</span>
      <yx-select :current.sync="pageParams.size"
                 :options="pageSize"
                 select-width="70px">
      </yx-select>
    </div>
    <div class="right-part">
      <btn-default>
        <svg class="icon-only" aria-hidden="true">
          <use xlink:href="#icon-icon-13"></use>
        </svg>
      </btn-default>
      <span class="page-info">{{pageParams.current}} / {{pageParams.number}}</span>
      <btn-default>
        <svg class="icon-only" aria-hidden="true">
          <use xlink:href="#icon-icon-14"></use>
        </svg>
      </btn-default>
      <input type="text" class="small-input" v-model="pageIndex">
      <btn-default class="text-only" @click.native="gotoIndex">
        <span>跳转</span>
      </btn-default>
    </div>
  </div>
</template>

<script>
import BtnDefault from '@components/common/btn/BtnDefault'
import YxSelect from '@components/common/input/YxSelect'
export default {
  name: 'YxPagination',
  components: {BtnDefault, YxSelect},
  props: {
    pageParams: {
      type: Object,
      required: true,
      default: () => {
        return {
          total: 1, // 条数，后面会从后端获取
          current: 1,
          size: 10,
          number: 1 // 页数，后面会从后端获取
        }
      }
    }
  },
  data () {
    return {
      pageIndex: 1,
      pageSize: [
        {
          code: '01',
          label: '10'
        },
        {
          code: '02',
          label: '20'
        },
        {
          code: '03',
          label: '50'
        }
      ]
    }
  },
  methods: {
    gotoIndex () {
      this.pageParams.current = this.pageIndex
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin yxInput {
  input {
    height: 34px;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0 4px;
    outline: 0;
    padding: 0 10px;
    border: 1px solid rgba(218, 218, 218, 1);
    font: 400 13.3333px Arial;
    &:hover {
      border: 1px solid #00BB72;
    }
    &:focus {
      border: 1px solid #00BB72;
    }
  }
}
.pagination-wrapper {
  width: 100%;
  height: 40px;
  color: #535353;
  font-size: 14px;
  font-weight: 400;
  padding-top: 20px;
  clear: both;
  .left-part {
    line-height: 34px;
    float: left;
  }
  .right-part {
    float: right;
    .page-info {
      margin: 0 15px;
    }
    @include yxInput;
    .small-input {
      width: 70px;
    }
    .text-only {
      padding: 0 16px;
    }
  }
}
</style>
