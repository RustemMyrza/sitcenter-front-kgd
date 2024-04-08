<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

import nonPhoto from "@/assets/avatart.jpg";

const isDisabled = ref(true);

const username = ref('');
const password = ref('');
const firstname = ref('');
const lastname = ref('');
const image = ref('');

const getInfo = async()=>{
    const result = await axios.get(`http://localhost:3000/api/v1/users/get-info`,{
    headers:{
      bearer:localStorage.getItem("authToken")
    }
  });
  username.value =result.data.user[0].login;
  password.value =result.data.user[0].password;
  firstname.value = result.data.user[0].firstname ?? "НЕТ" ;
  lastname.value = result.data.user[0].lastname ?? "НЕТ";
  image.value = localStorage.getItem('image') ?? nonPhoto;
  console.log(result);
}
onMounted(()=>{
    getInfo();
})

</script>

<template>
   <main>
    <div class="profile-container ">
       
        <div class="profile-forms w-1/2 mx-auto">
            <h3 class="m-4">Мой профиль</h3>
            <form class="sendForm m-2" @submit.prevent="updateInfo">
                <div class="prof-image mx-auto">
                    <img  :src="image" class="mx-auto my-10 rounded-full" alt="">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Логин</span>
                    <input :disabled="isDisabled" v-model="username" type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Пароль</span>
                    <input :disabled="isDisabled" v-model="password" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Имя</span>
                    <input :disabled="isDisabled" v-model="firstname" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Фамилия</span>
                    <input :disabled="isDisabled" v-model="lastname" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                <div class="input-group mt-10">
                    <button class="btn btn-primary mx-auto">Сохранить</button>
                    <button @click="isDisabled = !isDisabled" class="btn btn-primary mx-auto">Изменить</button>
                </div>

            </form>
        </div>
    </div>
   </main>
</template>

<style lang="scss" scoped>
.profile-container{
    width: 100%;
    height: 80vh;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .profile-forms{
        
        height: 100%;
        .sendForm{
            .input-group{
                margin-top: .5rem;
                margin-bottom: .5rem;
            }
        }
    }

}
</style>