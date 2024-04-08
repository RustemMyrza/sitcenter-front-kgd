<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

import nonPhoto from "@/assets/avatart.jpg";

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const isDisabled = ref(true);

const userInfo = ref({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    image: '',
})


const selectedFile = ref('');
// const selectedFileName = ref('');

const getInfo = async () => {
    const result = await axios.get(`http://${host}:${port}/api/v1/users/get-info`, {
        headers: {
            bearer: localStorage.getItem("authToken")
        }
    });
    userInfo.value = {
        username: result.data.user[0].login,
        password: result.data.user[0].password,
        email: result.data.user[0].email,
        firstname: result.data.user[0].firstname ?? "НЕТ",
        lastname: result.data.user[0].lastname ?? "НЕТ",
        image: localStorage.getItem('image') ?? nonPhoto,
    }

    console.log(result);
}

const handleFileChange = (event) => {
    selectedFile.value = event.target.files[0];

};
const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile.value);
    const queryParams = new URLSearchParams({ login: userInfo.value.username }).toString();

    try {
        const response = await fetch(`http://${host}:${port}/api/v1/users/upload?${queryParams}`, {
            method: "POST",
            headers: {
                bearer: localStorage.getItem("authToken")
            },
            body: formData
        });


        if (response.ok) {
            console.log("Image uploaded successfully");
            userInfo.value.image = `http://${host}:${port}/images/` + selectedFile.value.name;
            localStorage.setItem("image", userInfo.value.image);
            // console.log(image.value)
            // Perform any additional actions upon successful upload
        } else {
            console.error("Failed to upload image");
            // Handle error cases
        }
    } catch (error) {
        console.error("Error uploading image:", error);
        // Handle network errors or other exceptions
    }
}

const updateInfo = async () => {
    try {
        const result = await axios.put(`http://${host}:${port}/api/v1/users/get-info`, userInfo.value,
            {
                headers: {
                    bearer: localStorage.getItem("authToken")
                }
            }
        );
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
onMounted(() => {
    getInfo();
})

</script>

<template>
    <main>
        <div class="profile-container ">

            <div class="profile-forms w-1/2 mx-auto">
                <h3 class="m-2">Мой профиль</h3>

                <div class="input-group">
                    <input @change="handleFileChange" type="file" class="form-control" id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                    <button @click="uploadImage()" class="btn btn-outline-secondary" type="button"
                        id="inputGroupFileAddon04">Загрузить</button>
                </div>
                <form class="sendForm m-2" @submit.prevent="updateInfo">
                    <div class="prof-image mx-auto">
                        <img :src="userInfo.image" class="mx-auto my-10 rounded-full w-36" alt="">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Логин</span>
                        <input :disabled="isDisabled" v-model="userInfo.username" type="text" class="form-control"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Пароль</span>
                        <input :disabled="isDisabled" v-model="userInfo.password" type="text" class="form-control"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Почта</span>
                        <input :disabled="isDisabled" v-model="userInfo.email" type="text" class="form-control"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Имя</span>
                        <input :disabled="isDisabled" v-model="userInfo.firstname" type="text" class="form-control"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Фамилия</span>
                        <input :disabled="isDisabled" v-model="userInfo.lastname" type="text" class="form-control"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div class="input-group mt-5">
                        <input type="submit" value="Сохранить" class="btn btn-primary mx-auto text-white"/>
                       
                    </div>

                </form>
                <button @click="isDisabled = !isDisabled" class="btn btn-primary mx-auto">Изменить</button>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.profile-container {
    width: 100%;
    height: 80vh;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .profile-forms {

        height: 100%;

        .sendForm {
            .input-group {
                margin-top: .5rem;
                margin-bottom: .5rem;
            }
        }
    }

}
</style>