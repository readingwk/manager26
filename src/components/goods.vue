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
    <!-- 列表 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="goodsList" border style="width: 100%">
          <el-table-column type="index" label="#" width="55"></el-table-column>
          <el-table-column prop="goods_name" label="商品名称" width="500"></el-table-column>
          <el-table-column prop="goods_price" label="商品价格" width="100"></el-table-column>
          <el-table-column prop="goods_weight" label="商品重量" width="100"></el-table-column>
          <el-table-column prop="add_time" label="创建时间" width="190">
            <template slot-scope="scope">{{scope.row.add_time | beautifulTime}}</template>
          </el-table-column>
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
      level3: "商品列表",
      formData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      goodsList: [],
      total: 0
    };
  },
  methods: {
    async getGoods() {
      let res = await this.$axios.get("goods", {
        params: this.formData
      });
      console.log(res);
      this.goodsList = res.data.data.goods;
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
