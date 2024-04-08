<script>
export default {
    data() {
        return {
            minRotation: 0,
            maxRotation: -5
        };
    },
    computed: {
        rotation() {
            // Generate a random rotation value between minRotation and maxRotation
            return Math.floor(Math.random() * (this.minRotation - this.maxRotation + 1)) + this.maxRotation;
        }
    }
};
</script>
<template>
    
        <div class="board-container">
            <div class=" text-center">
                <h2>Доска объявлений</h2>
            </div>
            <div class="boards">
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
                <div class="board" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div class="board-header">
                        <div class="title">
                            <h4>Кондиционеры</h4>
                        </div>

                    </div>
                    <div class="board-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam iusto aspernatur ea
                        repudiandae repellendus eos. Omnis assumenda quasi quos officia voluptatem magnam? Voluptas modi
                        architecto omnis quia nam quas!
                    </div>
                    <div class="board-author">
                        <h4>admin</h4>
                        <div class="date font-semibold">10.10.2024 11:41:01</div>
                    </div>

                </div>
            </div>
        </div>
    
</template>

<style lang="scss" scoped>

   

    .board-container {
       
     width: 100%;
     height: 70vh;


        .boards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            background: url(../assets/billback.jpg) no-repeat;
            background-size: cover;
            overflow: scroll;

            .board {
                width: 15vw;
                margin: 1rem;
                height: fit-content;
                padding: 1rem;
                background-color: aliceblue;
                transform: rotate(-5deg);
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