<template lang="html">
  <div>
    <navbar></navbar>
    <div class="page">
      <el-row>
        <el-col :span="3">
          这是左侧导航栏
        </el-col>
        <el-col :offset="1" :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
export default {
  data() {
    return {
    }
  },
  components: {
    navbar,
  }
}
</script>

<style lang="css" scoped>
  .el-col-3{
    background-color: #000;
    color: #fff;
    height: 80vh;
  }
  .el-col-20 {
    height: 80vh;
  }
</style>
