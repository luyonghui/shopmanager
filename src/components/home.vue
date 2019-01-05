<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <img src="@/assets/logo.png" alt="图片无法显示">
          </div>
        </el-col>
        <el-col :span="19" class="middle">
          <div class="grid-content bg-purple-light">
            <h2>电商后台管理系统</h2>
          </div>
        </el-col>
        <el-col :span="1" class="loginout">
          <a href="#" @click.prevent="handleLoginout()">退出</a>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu unique-opened default-active="2">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class></i>
              用户列表
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class></i>
              角色列表
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class></i>
              权限列表
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="1-5">
              <i class></i>
              商品分类
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class></i>
              订单列表
            </el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-3">
              <i class></i>
              数据列表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 判断页面上是否有token 如果有 就渲染页面，没有就回到登陆页面
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$message.warning("请先登录");
      this.$router.push({
        name: "login"
      });
    }
    // 之后会继续执行钩子函数  mounted(){}
  },
  methods: {
    // 用户退出 清除token
    handleLoginout() {
      //  1 清除token  localStorage有自带的方法 clear  可以清除token
      localStorage.clear();
      //  2 回到登陆组件
      this.$router.push({
        name: "login"
      });
      //  3 提示
      this.$message.success("退出成功");
    }
  }
};
</script>

<style>
.container {
}
.container .header {
  background-color: #b3c0d1;
}
.container .aside {
}
.container .main {
}
.middle {
  text-align: center;
  color: #fff;
  line-height: 60px;
}
.loginout a {
  line-height: 60px;
  text-decoration: none;
}
</style>
