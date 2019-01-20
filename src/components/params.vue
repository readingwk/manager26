<template>
  <div class="user-container">
    <!-- 面包屑 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <myBreadcrumb :level2="level2" :level3="level3"></myBreadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-row class='mt'>
      <el-col :span="24">
        <el-alert title="注意：只允许为第三级分类设置相关参数！" type="warning" show-icon></el-alert>
      </el-col>
    </el-row>
    <el-row class='mt'>
      <el-col :span="24">
        <span class='mr'>请选择商品分类:</span>
        <el-cascader
          expand-trigger="hover"
          :options="paramList"
          v-model="selectedOptions2"
          :props="props"
        ></el-cascader>
      </el-col>
    </el-row>
    <el-row class='mt'>
      <el-col :span="24">
        <el-tabs v-model="activeName" >
          <el-tab-pane label="动态参数" name="first" >
            <el-button type="primary">添加动态参数</el-button>
              <el-table  border style="width: 100%">
                <el-table-column label="" width="55"></el-table-column>
                <el-table-column type="index" label="#" width="55"></el-table-column>
                <el-table-column prop="goods_name" label="商品参数" width="200"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
                    <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
                  </template>
                </el-table-column>
              </el-table>
          </el-tab-pane>
          <el-tab-pane label="静态参数" name="second">
            <el-button type="primary">添加静态参数</el-button>
            <el-table border style="width: 100%">
                <el-table-column type="index" label="#" width="55"></el-table-column>
                <el-table-column prop="goods_name" label="属性名称" width="200"></el-table-column>
                <el-table-column prop="goods_name" label="属性值" width="300"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
                    <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
                  </template>
                </el-table-column>
              </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      level2: "商品管理",
      level3: "分类参数",
      paramList: [],
      props: {
        value: 'cat_id',
        label: 'cat_name'
      },
      activeName: "first",
      selectedOptions2:[]
    };
  },
  async created() {
    let res = await this.$axios.get("categories?type=3");
    // console.log(res);
    this.paramList = res.data.data;
  }
};
</script>
<style>
.btn-add {
  text-align: left;
}
</style>
