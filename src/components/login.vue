<template>
  <div class="wrap">
    <el-form class="form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin()" type="primary" class="btn">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      this.$http.post("login", this.formdata).then(res => {
        //  console.log(res);
        //  const per = {data:{name:'abc'}}
        //  const {data} = per
        //  将per中data的数据赋值给data常量
        // const {data:newdata} = per
        // 将per中data的值 name:'abc' 赋值给newdata这个常量
        // 这个写法 称之为  对象结构起别名的写法
        //  ES6对象的结构赋值

        const {
          data: {
            meta: { msg, status }
          }
        } = res;
        if (status == 200) {
          //  alert(msg)
          // this.$message({
          //   showClose: true,
          //   message: msg,
          //   type: "success"
          // });
          // 两种写法
          this.$message.success(msg);
          // 登录成功后渲染home.vue组件  改标识 编程式导航
            this.$router.push({
              name : "home"
            })
        } else {
          this.$message.warning(msg);
          // this.$message({
          //   showClose: true,
          //   message: msg,
          //   type: "warning"
          // });
        }
      });
    }
  },
  mounted() {
    // console.log(this.$http);
  }
};
</script>

<style>
.wrap {
  height: 100%;
  background-color: #324152;
  /* 以下代码是伸缩盒子用法 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap .form {
  background-color: #fff;
  border-radius: 5px;
  width: 380px;
  padding: 30px;
}
.btn {
  width: 100%;
}
</style>
