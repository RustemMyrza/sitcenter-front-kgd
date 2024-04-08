<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      username: "",
      password: "",
      isError: false,
      errorMessage: "",
      text:"sc"
    };
  },
  computed: {
    ...mapGetters(['errorMessage']),
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit() {
      const loginSuccess = await this.login({ username: this.username, password: this.password, type:this.text });
      if (loginSuccess) {
        this.$router.push("/");
      } else {
        this.isError = true;
        this.errorMessage = "Неверное имя пользователя или пароль";
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
          <div class="inputs px-4 ">
            <div class="loginTypes flex ">
              <v-btn-toggle v-model="text" color="deep-purple-accent-3" rounded="0" group>
                <v-btn value="sc" variant="outlined">
                  Классическое
                </v-btn>

                <v-btn value="op" variant="outlined ">
                  Оператор
                </v-btn>
                <v-btn value="nomad" variant="outlined ">
                  Пользователь Номада
                </v-btn>

                
              </v-btn-toggle>
            </div>
            <form @submit.prevent="onSubmit">
              <div class="form-floating mb-3">
                <input v-model="username" type="text" class="form-control" id="floatingInput"
                  placeholder="name@example.com">
                <label for="floatingInput">Имя пользователя</label>
              </div>
              <div class="form-floating">
                <input v-model="password" type="password" class="form-control" id="floatingPassword"
                  placeholder="Password">
                <label for="floatingPassword">Пароль</label>
              </div>
              <input value="Вход" type="submit" class="btn btn-primary text-white" />
              <p v-if="isError" class="error-mess p-2 text-red-600 text-lg">{{ errorMessage }}</p>
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
// Styles...
</style>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(221, 221, 221);

  .login-container {
    width: 100%;
    height: 100%;
    display: flex;

    .left-side {
      width: 50%;
      height: 100%;
      background-color: white;

      .form {
        .inputs {
          border: 5px solid blue;
          padding: 1rem;
          border-radius: 1rem;
        }
      }

      .login-title {
        height: 20%;
       
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