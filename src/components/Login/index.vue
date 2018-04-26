<template>
  <div id="login">
    <div>欢迎登陆</div>
    <div>
      账号：<input type="text" v-model="username" name="username" placeholder="" />
    </div>
    <div>
      密码：<input type="password" v-model="password" name="password" placeholder="" />
    </div>
    <div @click="submitHandler">登陆</div>
  </div>

</template>
<script>
// Component
export default  {
  name: 'Login',
  data() {
    return {
      username: '', // where is the getter fn ???
      password: ''
    }
  },
  computed: {
    user: function() {
      return this.username + '....' || 'opt'
    }
  },
  // this -> Created Vue's instance / not support for ()=>{}
  methods: {
    submitHandler: function() {
      if (this.username && this.password) {
        if (this.username === 'admin', this.username === 'admin') {
          console.log('success & jump ===> ');
        } else {
          console.log('用户名或密码错误');
        }
      } else {
        console.log('请正确填写用户名或密码')
      }
    },
    validate: () => {}
  }
}
</script>
<style scoped>

</style>
