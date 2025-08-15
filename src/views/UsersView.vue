<script setup>
import { fetchUsers } from "@/utils/user";
import { onMounted, ref, } from "vue";

import { deleteUser, createUser, } from "@/utils/user";


// const users = ref([]);

const search = ref("");
const headers = ref([
    { key: "action", title: "Действия", align: "center", sortable: false, },
    // { key: "update", title: "Изменить", align: "center", sortable: false, },
    { align: "center", key: "login", title: "Имя пользователя", },
    { key: "password", title: "Пароль", align: "center" },
    { key: "firstname", title: "Имя", align: "center" },
    { key: "lastname", title: "Фамилия", align: "center" },
    { key: "id_branch", title: "Отделения", align: "center" },
    { key: "ins_date", title: "Дата добавления", align: "center" },
    { key: "sign_in_date", title: "Дата последнего посещения", align: "center" },

]);
const desserts = ref([]);

const createObject = ref({
    username: "",
    password: "",
    id_branch: "",
})


// const showModal = ref(false)

const getUsers = async () => {
    const result = await fetchUsers();
    console.log(result.data.data);
    const usersArray = result.data.data.users;
    desserts.value = usersArray;
    // const deleteButton = document.createElement("button");
    // deleteButton.innerText = "Delete";
    // desserts.value.map(e=>{
    //     e.action = deleteButton;
    // })
    // console.log(desserts.value)
}
const getRole = () => {
    return localStorage.getItem("role") * 1;
}

const deleteUserFun = async (id) => {
    // const role = localStorage.getItem("role") * 1;
    // if(role!==0){
    //     return alert("Нельзя удалять")
    // }
    const result = await deleteUser(id);
    desserts.value = desserts.value.filter(e => e.id !== id);
    console.log(result);
}
// const update = async (id) => {
//     id
// }

const create = async () => {
    await createUser(createObject.value);
    // desserts.value.push(createObject.value);
    await getUsers();
    createObject.value = {
        username: "",
        password: "",
        id_branch: "",
    }

}
// const updateUserInfo = async (id) => {
//     try {
//         const element = desserts.value.find(e => e.id === id);
//         console.log(element)
//         createObject.value = {
//             username: element.login,
//             password: element.password,
//             id_branch: element.id_branch,
//         }
//     } catch (err) {
//         console.log(err);
//     }

// }
// const updateUser = async(id)=>{

//     await update(id,createObject);
//     await getUsers();
// }



// const filteredHeaders = computed(() => headers.value.filter(header => header.key !== 'action'));


onMounted(() => {
    getUsers();
})



</script>


<template>
    <main>
        <div class="user-container">
            <h3>Пользователи</h3>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary float-left text-white" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Добавить
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Создание пользователя</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- <form @submit.prevent="createUser()"> -->
                            <div class="form-floating mb-3">
                                <input v-model="createObject.username" type="text" class="form-control"
                                    id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Имя пользователя</label>
                            </div>
                            <div class="form-floating">
                                <input v-model="createObject.password" type="password" class="form-control"
                                    id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Пароль</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="createObject.id_branch" type="text" class="form-control"
                                    id="floatingInput">
                                <label for="floatingInput">Отделения</label>
                            </div>

                            <!-- </form> -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary text-white"
                                data-bs-dismiss="modal">Закрыть</button>
                            <butto @click="create()" type="button" class="btn btn-primary text-white">Создать</butto>
                        </div>
                    </div>
                </div>
            </div>
            <div class="users">

                <v-card flat title="">

                    <template v-slot:text>
                        <v-text-field v-model="search" label="Искать" prepend-inner-icon="mdi-magnify" single-line
                            variant="outlined" hide-details></v-text-field>
                    </template>

                    <v-data-table :headers="headers" :items="desserts" :search="search">
                        <template v-slot:item="{ item }">
                            <tr>
                                <td>
                                    <v-btn :disabled="getRole() !== 0" class="w-24" fab dark small color="red"
                                        @click="deleteUserFun(item.id)">Удалить</v-btn>
                                </td>
                                <!-- <td>
                                    <button @click="updateUserInfo()" type="button"
                                        class="btn btn-primary float-left text-white" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        Изменить
                                    </button>
                                </td> -->
                                <td>
                                    {{ item.login }}
                                </td>
                                <td>
                                    {{ item.password }}
                                </td>
                                <td>
                                    {{ item.firstname }}
                                </td>
                                <td>
                                    {{ item.lastname }}
                                </td>
                                <td>
                                    {{ item.id_branch }}
                                </td>
                                <td>
                                    {{ item.ins_date }}
                                </td>
                                <td>
                                    {{ item.sign_in_date }}
                                </td>
                            </tr>
                            <!-- <v-btn class="w-24" fab dark small color="green"  @click="update(item.id)">Изменить</v-btn> -->
                        </template>
                    </v-data-table>
                </v-card>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
td,
td {
    text-align: center;
}

.user-container {

    width: 100%;
    height: 100%;
    padding: 1rem;

    .users {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .user {
            width: 100%;
            padding: 1rem;

            border-radius: 10px;
            margin: 0.5rem;
            box-shadow: 10px 10px 20px -5px rgba(0, 0, 0, 0.5);

        }
    }

}
</style>