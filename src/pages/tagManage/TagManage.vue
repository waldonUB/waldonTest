<template>
  <div>
    <content-header>
      <template #headerLeft>
        <span>标签管理</span>
      </template>
    </content-header>
    <content-panel>
      <section class="panel-body">
        <div class="btn-group">
          <btn-success @click.native="addTsClientLabel">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-11"></use>
            </svg>
            <span>添加标签</span>
          </btn-success>
        </div>
        <yx-table :table-th-list="tableThList">
          <tr v-for="item of tableList"
              :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>
              <btn-normal class="btn-normal-rt">重命名</btn-normal>
              <btn-normal>删除</btn-normal>
            </td>
          </tr>
        </yx-table>
        <yx-pagination :pageParams="pageParams"></yx-pagination>
      </section>
    </content-panel>
    <yx-alert type="error" :is-show.sync="isShow">{{showMsg}}</yx-alert>
  </div>
</template>

<script>
import ContentHeader from '@components/common/contentHeader/ContentHeader'
import BtnSuccess from '@components/common/btn/BtnSuccess'
import ContentPanel from '@components/common/contentPanel/ContentPanel'
import YxTable from '@components/common/table/YxTable'
import YxPagination from '@components/common/pagination/YxPagination'
import YxSelect from '@components/common/input/YxSelect'
import BtnNormal from '@components/common/btn/BtnNormal'
import YxAlert from '@components/common/alert/YxAlert'

export default {
  name: 'TagManage',
  components: {ContentHeader, BtnSuccess, BtnNormal, ContentPanel, YxTable, YxPagination, YxSelect, YxAlert},
  data () {
    return {
      // 分页信息
      pageParams: {
        total: 1, // 条数
        pageNow: 1,
        limit: 10
      },
      tableThList: [
        {
          prop: 'id',
          label: 'ID',
          width: '150'
        },
        {
          prop: 'name',
          label: '标签名称',
          width: '800'
        },
        {
          prop: 'operate',
          label: '操作',
          width: '150'
        }
      ],
      tableList: [],
      isShow: false,
      showMsg: ''
    }
  },
  methods: {
    /**
     * 获取标签列表
     * */
    async getTsClientLabelList () {
      let params = {
        sid: -1
      }
      const res = await this.$yxPost('/client/tsClientLabel_h.jsp?cmd=getTsClientLabelList', params)
      if (res.data && res.data.success) {
        this.tableList = res.data.data
        this.pageParams.total = res.data.total
      } else {
      }
    },
    /**
     * 添加标签
     * */
    async addTsClientLabel () {
      let params = {
        sid: -1,
        name: '测试哈哈哈'
      }
      const res = await this.$yxPost('/client/tsClientLabel_h.jsp?cmd=addTsClientLabel', params)
      if (res.data && res.data.success) {
        this.tableList = res.data.data
        this.pageParams.total = res.data.total
      } else {
        this.isShow = true
        this.showMsg = res.data.msg
      }
    }
  },
  created () {
    this.getTsClientLabelList()
  }
}
</script>

<style lang="scss" scoped>
.panel-body {
  .btn-group {
    margin-bottom: 20px;
  }
}
</style>
