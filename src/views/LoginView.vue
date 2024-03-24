<script >
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  methods: {
    goToMainPage(token) {
      localStorage.setItem("authToken", token);
      this.router.push("/");
    },
    async login() {
      try {
        const result = await axios.post(
          `http://localhost:3000/api/v1/auth/login`,
          {
            username: this.username,
            password: this.password,
          }
        );
        // console.log(result.data.token);
        this.goToMainPage(result.data.token);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="login-container">
      <div class="left-side">
        <div class="login-title">Авторизация</div>
        <div class="form">
          <div class="inputs">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"></span>
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Имя пользователя"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"></span>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Пароль"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="buttons">
            <button
              @click="login()"
              type="button"
              class="btn btn-primary text-white"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="logoImg">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="logoText">Ситуационный центр</div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(221, 221, 221);
  .login-container {
    width: 60%;
    height: 50%;
    display: flex;

    .left-side {
      width: 50%;
      height: 100%;
      background-color: white;
      .login-title {
        height: 20%;
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .form {
        height: 80%;
        div {
          margin: 2rem auto;
        }
      }
    }
    .right-side {
      background-color: rgb(23, 23, 94);
      width: 50%;
      height: 100%;
      .logoImg {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .logoText {
        color: white;
      }
    }
  }
}
</style>