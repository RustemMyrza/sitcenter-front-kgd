// store/index.js
import { createStore } from "vuex";
import axios from "axios";

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

export default createStore({
  state: {
    isAuthenticated: !!localStorage.getItem("authToken"),
    errorMessage: "",
    username: localStorage.getItem("login") || null,
    userInfo: "",
    parentBranchId: "",
    childBranchId: "",
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setParentBranchId(state, parentBranchId) {
      state.parentBranchId = parentBranchId;
    },
    setChildBranchId(state, childBranchId) {
      state.childBranchId = childBranchId;
    },
  },
  actions: {
    async login({ commit }, { username, password, type }) {
      try {
        let url;
        console.log(type);
        if (type === "sc") {
          url = `http://${host}:${port}/api/v1/auth/login`;
        } else if (type === "nomad") {
          url = `http://${host}:${port}/api/v1/auth/nomadLogin`;
        }
        // console.log(url);

        const response = await axios.post(url, {
          username,
          password,
        });
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("login", response.data.login);
        localStorage.setItem("role", response.data.role);

        commit("setUsername", response.data.login);
        commit("setAuthentication", true);

        return true; // Return true if login is successful
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          if (error.response.status === 401) {
            commit("setErrorMessage", "Неверное имя пользователя или пароль");
          } else if (error.response.status === 500) {
            commit("setErrorMessage", "Проблемы с сервером. Повторите поеже");
          } else {
            commit("setErrorMessage", "Произошла ошибка. Повторите поеже");
          }
        } else if (error.request) {
          // The request was made but no response was received
          commit("setErrorMessage", "Нет ответа от сервера. Повторите поеже.");
        } else {
          // Something happened in setting up the request that triggered an Error
          commit("setErrorMessage", "Произошла ошибка. Повторите поеже.");
        }
        console.error(error);
        return false; // Return false if login fails
      }
    },
    // async getInfo({commit}, {login}){
    //   const result = await axios.get(
    //     `http://localhost:3000/api/v1/users/get-info`,
    //     {
    //       headers: {
    //         bearer: localStorage.getItem("authToken"),
    //       },
    //     }
    //   );

    //   // if (result.data.user[0].image) {
    //   //   const url = `http://${host}:${port}/images/`+ result.data.user[0].image;
    //   //   console.log(url)
    //   //   commit("setImage",url);
    //   //   localStorage.setItem("image",url);
    //   // } else commit("setImage", null);
    // },
    async logout({ commit }) {
      commit("setAuthentication", false);
      localStorage.removeItem("authToken");
      localStorage.removeItem("login");
      commit("setUsername", null);
    },
    clearErrorMessage({ commit }) {
      commit("setErrorMessage", "");
    },
    async checkToken({ commit }) {
      const url = `http://${host}:${port}/api/v1/auth`;
      try {
        await axios.get(url,{
          headers:{
            bearer:localStorage.getItem("authToken")
          }
        });
        commit("setAuthentication", true);
      } catch (err) {
        commit("setAuthentication", false);
        localStorage.removeItem("authToken");
        console.log(err);
      }
    },
  },
  getters: {
    errorMessage: (state) => state.errorMessage,
    username: (state) => state.username,
    userImage: (state) => state.userImage,
    parentBranchId: (state) => state.parentBranchId,
    childBranchId: (state) => state.childBranchId,
    isAuth: (state, getters, rootState, rootGetters) => () => {
      rootState.isAuthenticated = rootGetters.isAuthenticated; // Ensure that the isAuthenticated state is up-to-date
      state.dispatch('checkToken'); // Dispatch checkToken action every time isAuth is accessed
      return !!state.username && !!localStorage.getItem("authToken");
    },
  },
  modules: {},
});
