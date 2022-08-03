<template>
  <el-form class="gzOne">
    <el-form-item class="test1">
      <span>工单编号:</span><el-input v-model="input" class="input" placeholder="请输入" />

    </el-form-item>
    <el-form-item>
      <span>工单状态:</span><el-select v-model="value" class="pask" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-button class="el-icon-search btn" size="small">查询</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      options: [{
        value: '选项1',
        label: '待办'
      }, {
        value: '选项2',
        label: '进行'
      }, {
        value: '选项3',
        label: '取消'
      }, {
        value: '选项4',
        label: '完成'
      }
      ],
      value: ''
    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>
.gzOne{
    display: flex;
    .test1{
    .input{
        width: 100px;
        margin-right: 15px;
        margin-left: 10px;
    }
    }
    .pask{
        margin-left: 15px;
    }
    .btn{
        height: 40px;
        margin-left: 15px;
        background-color:#5F84FF ;
        color: #fff;
    }

}
</style>
