<template>
  <div class="table-wrapper">
    <table>
      <colgroup>
        <col v-for="item of tableThList"
             :name="item.prop"
             :key="item.prop"
             :style="{width: `${item.width}px`}">
      </colgroup>
      <thead>
      <tr>
        <th v-for="item of tableThList"
            :key="item.prop">
          {{item.label}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item of tableList"
          :key="item.id">
        <td>{{item.contacts}}</td>
        <td>{{item.mobile}}</td>
        <td>{{item.qq}}</td>
        <td>{{item.sourceName}}</td>
        <td>{{item.sid}}</td>
        <td>{{item.visitsTimeName}}</td>
        <td>{{item.status}}</td>
        <td>{{item.labelId}}</td>
        <td>
          <btn-normal class="btn-normal-rt">回访记录</btn-normal>
          <btn-normal class="btn-normal-rt">编辑</btn-normal>
          <btn-normal>淘汰</btn-normal>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BtnNormal from '@components/common/btn/BtnNormal'
export default {
  name: 'YxTable',
  components: {BtnNormal},
  props: {
    tableThList: { // 表头数据
      type: Array,
      required: true,
      default: () => []
    },
    tableList: { // 表体数据
      type: Array,
      required: true,
      default: () => []
    }
  },
  created () {
    // if (this.tableList && this.tableList.length > 0) {
    //   this.tableList.forEach(item => {
    //     this.tableThList.forEach(subItem => {
    //
    //     })
    //   })
    // } else {
    //   this.tableList = this.tableThList
    // }
  }
}
</script>

<style lang="scss" scoped>
  @mixin to-flex($direction) {
    display: flex;
    flex-flow: $direction nowrap;
  }
  .table-wrapper {
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid #ebeef5;
      thead {
        tr {
          background: rgba(250,250,250,1);
          th {
            height: 50px;
            min-width: 0;
            flex: 1;
            padding: 12px 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            white-space: normal;
            overflow: hidden;
            user-select: none;
            text-overflow: ellipsis;
            vertical-align: middle;
            position: relative;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: rgba(83, 83, 83, 1);
            border: 1px solid #ebeef5;
          }
        }
      }
      tbody {
        tr {
          &:hover {
            background-color: rgba(245, 247, 250, 1);
          }
          td {
            height: 50px;
            min-width: 0;
            flex: 1;
            padding: 12px 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            white-space: normal;
            overflow: hidden;
            user-select: none;
            text-overflow: ellipsis;
            vertical-align: middle;
            position: relative;
            text-align: center;
            font-size: 14px;
            color: rgba(83, 83, 83, 1);
            border: 1px solid #ebeef5;
            .btn-normal-rt {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
</style>
