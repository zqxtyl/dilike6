<template>
  <div class="app">
    <div class="input">
      <img class="photo" src="../../assets/logo.595745bd.png" alt="" />
      <div class="main">
        <el-form ref="user" :model="user" :rules="rules">
          <el-form-item prop="loginName">
            <el-input
              v-model="user.loginName"
              placeholder="admin"
              prefix-icon="el-icon-mobile-phone"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="user.password"
              prefix-icon="el-icon-unlock "
              placeholder="请输入密码"
              show-password
              class="lest1"
            />
          </el-form-item>
          <el-form-item prop="code">
            <div class="lest2">
              <el-input
                v-model="user.code"
                prefix-icon="el-icon-circle-check "
                class="lest3"
                placeholder="请输入内容"
              />
              <img
                :src="`https://likede2-java.itheima.net/api/user-service/user/imageCode/${user.clientToken}`"
                alt=""
                @click="getCode"
              />
            </div>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="test" @click="btnOk">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { login, yanzm } from '@/api/user'

export default {
  components: {},
  data() {
    return {
      user: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0,
        msg: '',
      },
      token: this.$store.state.user.token,
      rules: {
        loginName: [
          {
            required: true,
            min: 2,
            max: 5,
            message: '用户名不正确',
            targger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            min: 2,
            max: 5,
            message: '密码不正确',
            targger: 'blur',
          },
        ],
        code: [
          {
            required: true,
            min: 2,
            max: 5,
            message: '验证码不正确',
            targger: 'blur',
          },
        ],
      },
      userInfo: {},
    }
  },

  created() {
    this.getNum()
  },

  methods: {
    getNum() {
      var chars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ]
      var nums = ''
      for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * 61)
        nums += chars[id]
      }
      this.user.clientToken = nums
    },

    async getCode() {
      await yanzm(this.user.clientToken)
      // console.log(res)
      this.getNum()
    },
    async btnOk() {
      try {
        await this.$refs.user.validate()
        const { data } = await login(this.user)
        this.userInfo = data
        this.msg = data.msg
        this.token = data.token
        console.log(data);
        this.$store.dispatch('user/getUserInfo', this.userInfo)
        this.$store.dispatch('user/getCode', this.token)
        window.localStorage.setItem('DILIKE', this.token)
        if (this.user.loginName !== 'admin' && this.user.password !== 'admin') {
          this.$message.error('账号和密码错误')
        }

        if (this.token) {
          this.$router.push('/')
          this.$message.success('登录成功')
        } else {
          this.$message.error(this.msg)
          this.getCode()
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped lang="less">
.app {
  background: url('../../assets/dabeee1f60c9a9c6398099eb1bca5f4.png');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  border-style: cover;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;

  .input {
    width: 450px;
    height: 50px;
    margin-bottom: 450px;
    position: relative;
    .photo {
      width: 60px;
      height: 60px;
      position: absolute;
      top: -30px;
      left: 220px;
    }
    .main {
      width: 500px;
      height: 400px;
      background-color: #fff;
      border-radius: 20px;
      padding: 60px 40px;
      .lest1 {
        margin-top: 30px;
      }
      .test {
        width: 450px;
        position: absolute;
        left: 20px;
        top: 300px;
        background-color: #4463e5;
      }
      .lest2 {
        margin-top: 30px;
        display: flex;
        .lest3 {
          width: 200px;
        }
      }
    }
  }
}
</style>
