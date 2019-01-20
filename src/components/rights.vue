<template>
  <div class="user-container">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- <el-breadcrumb class separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{level3}}</el-breadcrumb-item>
          </el-breadcrumb> -->
          <myBreadcrumb :level2='level2' :level3='level3'></myBreadcrumb>
        </div>
      </el-col>
    </el-row>
   
    <el-row>
      <el-col :span="24">
        <el-table :data="rightList" border style="width: 100%">
          <el-table-column type="index"  label="#" width="55"></el-table-column>
          <el-table-column prop="authName" label="权限名称" width="80"></el-table-column>
          <el-table-column prop="path" label="路径" width="300"></el-table-column>
          <el-table-column prop="level" label="层级" width="300">
           <template slot-scope="scope">
            <span v-if="scope.row.level==='0'">一级</span>
            <span v-if="scope.row.level==='1'">二级</span>
            <span v-if="scope.row.level==='2'">三级</span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      level2: "权限管理",
      level3: "权限列表",
      rightList: [],
    };
  },
  async created() {
    let res=await this.$axios
      .get("rights/list")
      this.rightList = res.data.data;
  }
};
</script>
<style>
.btn-add {
  text-align: left;
}
</style>
