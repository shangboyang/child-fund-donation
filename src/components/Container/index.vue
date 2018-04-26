<template>
  <div>
    <el-container>
      <el-header>管理后台</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                router=true
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">

                <el-menu-item index="/main/funds">
                  <i class="el-icon-menu"></i>
                  <span slot="title">项目管理</span>
                </el-menu-item>

                <el-menu-item index="/main/users">
                  <i class="el-icon-menu"></i>
                  <span slot="title">用户管理</span>
                </el-menu-item>

              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <!-- Router -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>

export default {
  name: 'Container',
  data () {
    return {

    }
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log('ssssssssssss');
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-col {
  width: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
