<template>
    <div class="g-header">
      <!-- <el-row :gutter="20">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
          <div class="grid-content ep-bg-purple"></div>
        </el-col>
        <el-col :xs="8" :sm="10" :md="12" :lg="14" :xl="16">
          <div class="grid-content ep-bg-purple"></div>
        </el-col>
      </el-row> -->
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'GHeader',
    components: {
    }
  }
  </script>
  
  <style>
    .grid-content{
      height: 50px;
    }
    .g-header .el-col{
      background-color: #111;
    }
  </style>
  