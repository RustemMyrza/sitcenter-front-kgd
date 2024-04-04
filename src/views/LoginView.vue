<script>
import axios from "axios";
import { useRouter } from "vue-router";
const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;
export default {
  data() {
    return {
      username: "",
      password: "",
      isError: false,
      errorMessage: ""
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
        const response = await axios.post(
          `http://${host}:${port}/api/v1/auth/login`,
          {
            username: this.username,
            password: this.password,
          }
        );
        // If login is successful
        this.goToMainPage(response.data.token);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          if (error.response.status === 401) {
            this.errorMessage = "Неверное имя пользователя или пароль";
          } else if (error.response.status === 500) {
            this.errorMessage = "Проблемы с сервером. Повторите поэже";
          } else {
            this.errorMessage = "Произошла ошибка. Повторите поэже";
          }
        } else if (error.request) {
          // The request was made but no response was received
          this.errorMessage = "Нет ответа от сервера. Повторите поэже.";
        } else {
          // Something happened in setting up the request that triggered an Error
          this.errorMessage = "Произошла ошибка. Повторите поэже.";
        }
        this.isError = true;
        console.error(error);
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
            <form @submit.prevent="login()">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"></span>
                <input v-model="username" required type="text" class="form-control" placeholder="Имя пользователя"
                  aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"></span>
                <input v-model="password" required type="password" class="form-control" placeholder="Пароль" aria-label="Username"
                  aria-describedby="addon-wrapping" />
              </div>
              <input value="Вход" type="submit" class="btn btn-primary text-white" />
              <p v-if="isError" class="error-mess p-2 text-red-600 text-lg">{{errorMessage}}</p>
            </form>
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