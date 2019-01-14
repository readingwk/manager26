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
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          <el-input placeholder="请输入内容" v-model="formData.query">
            <template slot="append">
              <i class="el-icon-search"></i>
            </template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="16" class="btn-add">
        <div class="grid-content bg-purple-dark">
          <el-button type="success" plain>添加用户</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="userList" border style="width: 100%">
          <el-table-column type="index"  label="#" width="35"></el-table-column>
          <el-table-column prop="username" label="姓名" width="80"></el-table-column>
          <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
          <el-table-column prop="mobile" label="电话" width="300"></el-table-column>
          <el-table-column prop="mg_state" label="用户状态" width="80">
            <template slot-scope="scope">
              <el-switch
                v-model=" scope.row.mg_state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </template>
          </el-table-column>
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
    <el-row>
      <el-col :span="24">
        <el-pagination
          :current-page="formData.pagenum"
          :page-sizes="[2, 4, 6, 8,10]"
          :page-size="formData.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      level2: "用户管理",
      level3: "用户列表",
      formData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      userList: [],
      total: 0
    };
  },
  created() {
    this.$axios
      .get("users", {
        params: this.formData
      })
      .then(res => {
        console.log(res);
        this.userList = res.data.data.users;
        this.total = res.data.data.total;
      });
  }
};
</script>
<style>
.btn-add {
  text-align: left;
}
</style>
