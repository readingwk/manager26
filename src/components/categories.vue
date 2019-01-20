<template>
  <div class="user-container">
    <!-- 面包屑 -->
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
    <!-- 操作 -->
    <el-row>
      <el-col :span="24" class="btn-add">
        <div class="grid-content bg-purple-dark">
          <el-button type="success" plain>添加分类</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 列表 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="categoryList" border style="width: 100%">
          <el-table-column prop="cat_name" label="分类名称" width="500"></el-table-column>
          <el-table-column prop="cat_level" label="级别" width="100">
          <template slot-scope='prop'>
            <span v-if="prop.row.cat_level==='0'">一级</span>
            <span v-if="prop.row.cat_level==='1'">二级</span>
            <span v-if="prop.row.cat_level==='2'">三级</span>
          </template>
          </el-table-column>
          <el-table-column prop="false" label="是否有效" width="100"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
              <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 分页 -->
    <el-row>
      <el-col :span="24">
        <el-pagination
          :current-page="formData.pagenum"
          :page-sizes="[2, 4, 6, 8,10]"
          :page-size="formData.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @current-change="currentChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      level2: "商品管理",
      level3: "商品分类",
      formData: {
        type:2,
        pagenum: 1,
        pagesize: 10
      },
      categoryList: [],
      total: 0
    };
  },
  methods: {
    async getGoods() {
      let res = await this.$axios.get("categories?type=2", {
        params: this.formData
      });
      console.log(res);
      this.categoryList = res.data.data.result;
      this.total = res.data.data.total;
    },
    currentChange(pagenum) {
      this.formData.pagenum = pagenum;
      this.getGoods();
    }
  },
  async created() {
    this.getGoods();
  }
};
</script>
<style>
.btn-add {
  text-align: left;
}
</style>
