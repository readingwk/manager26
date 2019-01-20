<template>
  <div class="user-container">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- <el-breadcrumb class separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{level3}}</el-breadcrumb-item>
          </el-breadcrumb>-->
          <myBreadcrumb :level2="level2" :level3="level3"></myBreadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="btn-add">
        <div class="grid-content bg-purple-dark">
          <el-button type="success" plain>添加用户</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="rolesList" border style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-row v-for="(item, index) in props.row.children" :key="item.id">
                <el-col :span="4" >
                  <el-tag closable>{{item.authName}}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <el-col :span='20'>
                  <el-row v-for="level2 in item.children" :key="level2.id">
                    <el-col :span='4'>
                      <el-tag closable type='success'>{{level2.authName}}</el-tag>
                          <i class="el-icon-arrow-right"></i>
                    </el-col>
                    <el-col :span='20'>
                      <el-tag closable type='warning' v-for="level3 in level2.children" :key="level3.id">
                        {{level3.authName}}
                      </el-tag>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column type="index" label="#" width="35"></el-table-column>
          <el-table-column prop="roleName" label="角色名称" width="180"></el-table-column>
          <el-table-column prop="roleDesc" label="角色描述" width="300"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
              <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
              <el-button type="success" plain icon="el-icon-check" size="mini"></el-button>
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
      level3: "角色列表",
      rolesList: []
    };
  },
  async created() {
    let res = await this.$axios.get("roles");
    console.log(res);
    this.rolesList = res.data.data;
    // this.total = res.data.data.total;
  }
};
</script>
<style>
.btn-add {
  text-align: left;
}
</style>
