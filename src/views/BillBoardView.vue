<script>


import pingreen from "@/assets/pingreen.png";
import pinred from "@/assets/pinred.png";
import { getBoardList, deleteBoard, createBoard } from "@/utils/board";

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
                role: localStorage.getItem("role") * 1,
            },
        };
    },
    methods: {
        async createBoard() {

            if (this.boardObject.title === "" || this.boardObject.board_body === "") {
                return alert("Некоторые поля остались пустыми");
            }
            if(this.list.length===15){
                return alert("Нельзя создать больше объявлений");
            }
            try {
                const result = await createBoard(this.boardObject);


                if (result.status === 200) {
                    this.boardObject.created_at = new Date().toLocaleString("ru-RU");
                    this.boardObject.role =
                        this.boardObject.role === 0
                            ? "admin"
                            : this.boardObject.role === 2
                                ? "dgd"
                                : "ugd";
                    this.list.push(this.boardObject);
                } else {
                    alert("Больше двух объявлений");
                    console.log("Failed to add board. Status code:", result.status);
                    // Handle other status codes if needed
                }

                this.boardObject = {
                    title: "",
                    board_body: "",
                    valid_to: "",
                    role: localStorage.getItem("role") * 1,
                };
            } catch (err) {
                alert("Больше двух объявлений");
                console.log(err);
            }
        },

        async getBoardList() {
            try {
                this.list = await getBoardList();
                this.list.map((e) => {
                    e.role = e.role === 0 ? "admin" : e.role === 2 ? "dgd" : "ugd";
                });
                // console.log(result.data.data)
            } catch (err) {
                console.log(err);
            }
        },
        async deleteBoard(id) {
            const deleted = await deleteBoard(id);
            if (deleted) this.list = this.list.filter((board) => board.id !== id);
            else alert("Нельзя удалить");

            // console.log(result.data.data)
        },
        generatePin() {
            const images = [pingreen, pinred];
            const randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex];
        },
        generateRotation() {
            // Generate a random rotation value between minRotation and maxRotation
            return (
                Math.floor(Math.random() * (this.minRotation - this.maxRotation + 1)) +
                this.maxRotation
            );
        },
        resetObject() {
            this.boardObject = {
                title: "",
                board_body: "",
                valid_to: "",
                role: localStorage.getItem("role") * 1,
            };
        },
    },
    mounted() {
        this.getBoardList();
    },
    computed: {
        isDeletable() {
            return (id) => {
                const roleString = localStorage.getItem("role") * 1;
                const role =
                    roleString === 0 ? "admin" : roleString === 2 ? "dgd" : "ugd";
                const board = this.list.find((e) => e.id === id);
                return role === board.role || role === "admin";
            };
        },
    },
};
</script>
<template>
    <div class="board-container">
        <div class="text-center mt-4">
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
                            <button @click="resetObject()" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="title-input">
                                <label for="title">Заголовок</label>
                                <input v-model="boardObject.title" type="text" name="title" class=""
                                    placeholder="Заголовок" required />
                            </div>
                            <div class="body-input">
                                <label for="body">Текст</label>
                                <textarea v-model="boardObject.board_body" placeholder="Текст" name="body" id=""
                                    cols="20" rows="10" maxlength="200" required></textarea>
                            </div>
                            <input v-model="boardObject.valid_to" type="date" required />
                        </div>
                        <div class="modal-footer">
                            <button @click="resetObject()" type="button" class="btn btn-secondary text-white"
                                data-bs-dismiss="modal">
                                Закрыть
                            </button>
                            <button @click="createBoard()" type="button" class="btn btn-primary text-white">
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="boards">
            <div v-if="list.length === 0" class="birge w-full h-full flex justify-center items-center">
                <h1 class="font-mono font-bold">Біз біргеміз</h1>
            </div>
            <div v-for="board in list" :key="board.id" class="board" :class="board.role"
                :style="{ transform: `rotate(${generateRotation()}deg)` }">
                <div class="board-header">
                    <div @click="isDeletable(board.id) && deleteBoard(board.id)" class="pin flex justify-center">
                        <img :src="generatePin()" alt="" width="30%" />
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
.birge {
    h1 {
        font-size: 5vw;
        animation: shrink-grow 2s infinite;
    }
}

@keyframes example {
    0% {
        color: red;
    }

    25% {
        color: yellow;
    }

    50% {
        color: blue;
    }

    100% {
        color: green;
    }
}

@keyframes shrink-grow {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.9);
    }
}

@keyframes example {
    0% {
        background-color: red;
    }

    25% {
        background-color: yellow;
    }

    50% {
        background-color: blue;
    }

    100% {
        background-color: green;
    }
}

.pin {
    cursor: pointer;
}

.modal-body {
    div {
        margin: 0.5rem;
    }

    .title-input {
        input {
            width: 100%;
            padding: 0.5rem;
            border: 2px solid black;
        }
    }

    .body-input {
        textarea {
            width: 100%;
            height: auto;
            padding: 0.5rem;
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
            .board-text{
                overflow-wrap: break-word;
            }
        }
    }
}
</style>
