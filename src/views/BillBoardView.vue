<script>
import axios from "axios";
const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

import pingreen from "@/assets/pingreen.png";
import pinred from "@/assets/pinred.png";

// const colors = [
//     {
//         id: 1,
//         hex: "#e05c69",
//         role: 0
//     },
//     {
//         id: 1,
//         hex: "#5ce0ae",
//         role: 2
//     },
//     {
//         id: 1,
//         hex: "#5ca7e0",
//         role: 3
//     }
// ]

export default {
    data() {
        return {
            minRotation: 5,
            maxRotation: -5,
            list: [],
            boardObject: {
                title: "",
                board_body: "",
                valid_to: "",
                role: localStorage.getItem("role") * 1
            },
           

        };
    },
    methods: {
        async createBoard() {
            const url = `http://${host}:${port}/api/v1/board`;
            try {
                await axios.post(url, this.boardObject, {
                    headers: {
                        bearer: localStorage.getItem("authToken")
                    }
                });
                this.boardObject.created_at = new Date().toLocaleString("ru-RU");
                this.boardObject.role = this.boardObject.role === 0 ? "admin" : this.boardObject.role === 2 ? "dgd" : "ugd"
               
                this.list.push(this.boardObject);
                this.boardObject = {
                    title: "",
                    board_body: "",
                    valid_to: "",
                    role: localStorage.getItem("role") * 1
                }
            } catch (err) {
                console.log(err);
            }
        },
        async getBoardList() {
            const url = `http://${host}:${port}/api/v1/board`;
            try {
                const result = await axios.get(url, {
                    headers: {
                        bearer: localStorage.getItem("authToken")
                    }
                });
                this.list = result.data.data;
                this.list.map(e => {
                    e.role = e.role === 0 ? "admin" : e.role === 2 ? "dgd" : "ugd"
                })
                // console.log(result.data.data)
            } catch (err) {
                console.log(err);
            }
        },
        generatePin() {
            const images = [pingreen, pinred];
            const randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex];
        },
        generateRotation() {
            // Generate a random rotation value between minRotation and maxRotation
            return Math.floor(Math.random() * (this.minRotation - this.maxRotation + 1)) + this.maxRotation;
        },
        resetObject(){
            this.boardObject = {
                    title: "",
                    board_body: "",
                    valid_to: "",
                    role: localStorage.getItem("role") * 1
                }
        }

    

    },
    mounted() {
        this.getBoardList();
    },
    computed: {

    }
};
</script>
<template>

    <div class="board-container">
        <div class=" text-center mt-4">
            <h2>Доска объявлений</h2>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary text-white" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Создать
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Создание</h1>
                            <button @click="resetObject()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="title-input">
                                <label for="title">Заголовок</label>
                                <input v-model="boardObject.title" type="text" name="title" class=""
                                    placeholder="Заголовок">
                            </div>
                            <div class="body-input">
                                <label for="body">Текст</label>
                                <textarea v-model="boardObject.board_body" placeholder="Текст" name="body" id=""
                                    cols="20" rows="10"></textarea>
                            </div>
                            <input v-model="boardObject.valid_to" type="date">
                        </div>
                        <div class="modal-footer">
                            <button @click="resetObject()" type="button" class="btn btn-secondary text-white"
                                data-bs-dismiss="modal">Закрыть</button>
                            <button @click="createBoard()" type="button"
                                class="btn btn-primary text-white">Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="boards">
            <div v-for="board in list" :key="board.id" class="board"
                :class="board.role" :style="{ transform: `rotate(${generateRotation()}deg)` }">

                <div class="board-header ">
                    <div class="pin flex justify-center">
                        <img :src="generatePin()" alt="" width="30%">
                    </div>

                    <div class="title">
                        <h4>{{ board.title }}</h4>

                    </div>


                </div>
                <div class="board-text">
                    {{ board.board_body }}
                </div>
                <div class="board-author">
                    <h5 class="font-bold">{{ board.login }}</h5>
                    <div class="date font-semibold text-sm">{{ board.created_at }}</div>
                </div>

            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
.modal-body {
    div {
        margin: .5rem;
    }

    .title-input {
        input {
            width: 100%;
            padding: .5rem;
            border: 2px solid black;
        }
    }

    .body-input {
        textarea {
            width: 100%;
            height: auto;
            padding: .5rem;
            border: 2px solid black;
        }
    }
}

.board-container {

    width: 100%;
    height: 70vh;


    .boards {
        display: flex;
        margin: 1rem;
        height: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        background: url(../assets/billback.jpg);
        background-size: contain;
        overflow: scroll;

        .board.admin {
            background-color: #e05c69;
        }

        .board.dgd {
            background-color: #5ce0ae;
        }

        .board.ugd {
            background-color: #5ca7e0;
        }

        .board:hover {

            transform: scale(1.04, 1.05) skew(10deg, 2deg);
        }

        .board {

            width: 14vw;
            margin: 1rem;
            height: fit-content;
            padding: 1rem;
            background-color: aliceblue;

            box-shadow: rgba(0, 0, 0, 0.7) 10px 35px 20px 0px;

            .board-header {

                .title {
                    h4 {
                        font-weight: bold;
                    }

                }
            }

        }


    }
}
</style>