<script setup>
import { ref } from "vue";

const isDisabled = ref(true)
</script>

<template>
   <main>
    <div class="profile-container ">
       
        <div class="profile-forms w-1/2 mx-auto">
            <h3 class="m-4">Мой профиль</h3>
            <form class="sendForm m-2" @submit.prevent="updateInfo">
                <div class="prof-image mx-auto">
                    <img  src="../assets/avatar.png" class="mx-auto my-10 rounded-full" alt="">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Логин</span>
                    <input :disabled="isDisabled" type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Пароль</span>
                    <input :disabled="isDisabled" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Имя</span>
                    <input :disabled="isDisabled" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Фамилия</span>
                    <input :disabled="isDisabled" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
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