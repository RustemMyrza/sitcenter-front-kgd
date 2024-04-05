<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const pie = ref({
  options: {
    chart: {
      width: 300,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
            position: "top",
          },
        },
      },
    ],
  },
  series: [44, 55, 13, 43, 22],
});

const messages = ref([]);
const users = ref([]);
const msg = ref('');

const getMessages = async () => {
  const result = await axios(`http://localhost:3000/api/v1/messages`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  const resultMessages = result.data.data.message;
  resultMessages.map(e => {
    const d = new Date(e.created_at);
    e.created_at = d.toLocaleDateString("RU-ru") + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  });
  messages.value = resultMessages;

};

const getUsers = async () => {
  const result = await axios.get(`http://localhost:3000/api/v1/users/last`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  users.value = result.data.data.users;
  console.log(result.data.data.users);
}


const sendMessage = async () => {
  try {
     await axios.post(`http://localhost:3000/api/v1/messages`, {
      txt: msg.value,
    }, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    });
   
    const newMessages = {
      user_login:localStorage.getItem("login"),
      message_txt:msg.value,
      created_at:new Date().toLocaleString("RU-ru")
    }
    messages.value.push(newMessages)
    
    msg.value = "";
    // console.log(result)
  } catch (err) {
    console.log(err);
  }
}

onMounted(() => {
  getMessages();
  getUsers();
})
</script>

<template>
  <main>
    <div class="chat-container">
      <div class="chat-left">
        <div class="chat">
          <div class="inner">
            <div class="messages">

              <div v-for="message in messages" :key="message.id" class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg m-1 h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">{{ message.user_login }}</div>
                </div>
                <div class="msg p-2 m-1 w-full h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">
                    {{ message.message_txt }}
                  </div>
                  <div class="msg-date  text-sm">
                    {{ message.created_at }}
                  </div>
                </div>
              </div>


            </div>
            <div class="send-mess">
              <div class="input-group">
                <div class="form-floating">
                 
                  <textarea v-model="msg" class="form-control" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Сообщение...</label>
                    <!-- {{ msg }} -->
                   
                </div>
                <button @click="sendMessage" class="btn btn-primary">Отправить</button>
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-chat">
        <div class="pieChart">
          <apexchart :height="400" :options="pie.options" :series="pie.series"></apexchart>
        </div>
        <div class="last-container p-3">
          <div class="title m-2">
            <h5>Последние заходившие</h5>
          </div>
          <div class="flex overflow-x-auto space-x-8 w-full">
            <section v-for="user in users" :key="user.id" class="flex-shrink-0 rounded-full ">
              <span class="text-sm">{{ user.sign_in_date }}</span>
              <span class="flex justify-center items-center"><img src="../assets/avatart.jpg"
                  class="h-24 w-24 rounded-full border-2 " alt="" /></span>
              <span class="text-sm">{{ user.login }}</span>
            </section>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-container {
  width: 100%;
  height: 75vh;
  display: flex;

  .chat-left {
    width: 50%;
    height: 100%;
    padding: 1rem;

    .chat {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      border-radius: 1rem;
      padding: .1rem;
      background-color: rgb(143, 143, 143);

      .inner {
        width: 100%;
        height: 100%;
        border: 1px solid black;
        border-radius: 1rem;
        background-color: white;

        .messages {
          height: 90%;
          width: 100%;
          padding: 0.5rem;
          overflow-y: scroll;

          .message {
            position: relative;

            .msg-date {
              position: absolute;
              bottom: 5%;
              right: 2%;
            }
          }
        }

        .send-mess {
          height: 10%;
          width: 100%;

          .input-group {
            .form-floating {
              textarea {
                border-radius: 0 0 0 1rem;
              }

            }
          }
        }
      }
    }
  }

  .right-chat {
    width: 50%;
    height: 100%;

    .pieChart {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;

      .vue-apexcharts {
        width: 100%;
      }
    }

    .last-container {
      width: 100%;
      height: 30%;
    }
  }
}
</style>
