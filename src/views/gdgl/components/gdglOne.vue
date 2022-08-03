<template>
  <div class="app">
    <Title class="title" />
    <Buttom class="btn" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Buttom from '@/components/Buttom'
export default {
  components: {
    Title,
    Buttom
  },
  data() {
    return {

    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>
.app{
  .title{
    margin-top: 30px;
    margin-left: 30px;
  }
  .btn{
    margin-left: 30px;
    margin-top: 10px;
  }
}
</style>
