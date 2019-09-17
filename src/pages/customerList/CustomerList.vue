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
          <yx-select :current.sync="condition.sName"
                     :options="sList"
                     select-width="120px">
          </yx-select>
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
        <yx-table :table-th-list="tableThList"
          :table-list="tableList">
        </yx-table>
        <yx-pagination :pageParams="pageParams"></yx-pagination>
      </section>
    </content-panel>
  </div>
</template>

<script>
import ContentHeader from '@components/common/contentHeader/ContentHeader'
import BtnSuccess from '@components/common/btn/BtnSuccess'
import ContentPanel from '@components/common/contentPanel/ContentPanel'
import YxTable from '@components/common/table/YxTable'
import YxPagination from '@components/common/pagination/YxPagination'
import YxSelect from '@components/common/input/YxSelect'
export default {
  name: 'CustomerList',
  components: {ContentHeader, BtnSuccess, ContentPanel, YxTable, YxPagination, YxSelect},
  data () {
    return {
      // 搜索条件区域
      condition: {
        sName: '' // 业务人员
      },
      // 分页信息
      pageParams: {
        total: 1, // 条数，后面会从后端获取
        current: 1,
        size: 10,
        pages: 1 // 页数，后面会从后端获取
      },
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
      tagWidth: '28px',
      tableThList: [ // 表头数据
        {
          prop: 'contacts',
          label: '联系人',
          width: '120'
        },
        {
          prop: 'mobile',
          label: '联系手机',
          width: '150'
        },
        {
          prop: 'qq',
          label: '联系QQ',
          width: '150'
        },
        {
          prop: 'sourceName',
          label: '客户来源',
          width: '150'
        },
        {
          prop: 'sid',
          label: '业务员',
          width: '120'
        },
        {
          prop: 'visitsTimeName',
          label: '下次回访时间',
          width: '300'
        },
        {
          prop: 'status',
          label: '关联情况',
          width: '150'
        },
        {
          prop: 'labelId',
          label: '标签',
          width: '200'
        },
        {
          prop: 'operate',
          label: '操作',
          width: '300'
        }
      ],
      tableList: [
        {
          id: 1,
          contacts: '小叮当',
          mobile: '18799821312',
          qq: '1234567',
          source: 2,
          status: 1,
          labelId: 1,
          sid: 0,
          createTime: 1568268286000,
          sourceName: '客户介绍',
          visitsTimeName: ''
        }
      ], // 表格数据
      sList: [
        {
          code: '01',
          label: '全部业务员'
        },
        {
          code: '02',
          label: '小叮当'
        }
      ]
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
    },
    /**
     * 获取客户列表
     * */
    getTsClientList () {
      const vm = this
      vm.$http.post('/client/tsClient_h.jsp?cmd=getTsClientList', {}).then(res => {
        console.log(res)
      }).catch(res => {
        console.warn(res)
      })
    }
  },
  created () {
    this.condition.sName = this.sList[0].label
    this.getTsClientList()
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
