<template>
  <div class="select-input" :style="{width: selectWidth}">
    <input readonly type="text"
           class="select-option"
           v-model="current"
           @click="showOptions"
           @blur="closeOptions">
    <svg class="icon-select" aria-hidden="true">
      <use xlink:href="#icon-icon-8"></use>
    </svg>
    <ul class="select-options" v-show="isShowOptions">
      <li v-for="item of options"
          :key="item.code"
          @mousedown="selectOption(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YxSelect',
  props: ['current', 'options', 'selectWidth'],
  data () {
    return {
      isShowOptions: false // 是否显示下拉选项
    }
  },
  methods: {
    showOptions () {
      this.isShowOptions = !this.isShowOptions
    },
    closeOptions () {
      this.isShowOptions = false
    },
    selectOption (item) {
      this.showOptions()
      this.$emit('update:current', item.label)
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
    outline: 0;
    padding: 0 13px;
    border: 1px solid rgba(238, 238, 238, 1);
    font-size: 14px;
    color: #535353;
    &:hover {
      border: 1px solid #00BB72;
    }
    &:focus {
      border: 1px solid #00BB72;
    }
  }
}
.select-input {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  @include yxInput;
  .select-option {
    cursor: pointer;
    width: 100%;
  }
  .icon-select {
    width: 10px;
    height: 6px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    vertical-align: -0.15em;
    overflow: hidden;
    fill: rgb(178, 178, 178);
    cursor: pointer;
  }
  .select-options {
    width: 100%;
    list-style: none;
    margin: 0;
    background-color: #fff;
    position: absolute;
    top: 40px;
    border: 1px solid rgba(218, 218, 218, 1);
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 8px 0;
    box-sizing: border-box;
    z-index: 999;
    li {
      height: 36px;
      font-size: 14px;
      font-weight: 400;
      color: #535353;
      line-height: 36px;
      padding: 0 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      z-index: 10000;
      &:hover {
        background-color: rgb(246, 246, 246);
      }
    }
  }
}
</style>
