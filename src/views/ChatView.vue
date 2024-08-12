<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { API_BASE } from "@/utils/api";


const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;
const pie = ref({
  options: {
    chart: {
      width: 300,
      type: "pie",
    },
    labels: ["Доступно", "Нет связи", "Не используется", "Потеряна связь",],
    colors: ["#13ad02", "#fc0f03", "#ada5a5", "#d9e00d"],
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
  series: [44, 55, 13, 43],
});

const messages = ref([]);
const users = ref([]);
const msg = ref('');
const reply = ref(false);
const reply_obj = ref({
  id:0,
  message:'',
  login:''
})

const getMessages = async () => {
  const result = await axios(`http://${host}:${port}/api/v1/messages`, {
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
  const result = await axios.get(`http://${host}:${port}/api/v1/users/last`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  users.value = result.data.data.users;
  console.log(result.data.data.users);
}
const getBranches = async () => {
  const result = await axios.get(`http://${host}:${port}/api/v1/branches`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  const branches = result.data.rows;
  let online = 0;
  let offline = 0;
  branches.map(e => {
    e.children.map(child => {
      if (child.ONN === 1) {
        online++;
      }
      else offline++;
    })
  });
  pie.value.series = [online, offline, 0, 0];
  console.log(pie.value)
  console.log(result);
}


const sendMessage = async () => {
  if (!msg.value) {
    return alert("Заполните поле")
  }
  try {
    if (!reply.value) {
      await axios.post(`http://${host}:${port}/api/v1/messages`, {
        txt: msg.value,
      }, {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      });
    }
    else {
      console.log(reply_obj.value)
      await axios.post(`http://${host}:${port}/api/v1/messages/reply`, {
        txt: msg.value,
        reply_id: reply_obj.value.id
      }, {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      });
      reply_obj.value.id=0;
      reply_obj.value.message = "";
      reply_obj.value.login = "";
      reply.value = false;
    }

    await getMessages();

    msg.value = "";
    // console.log(result)
  } catch (err) {
    console.log(err);
  }
}

// const getImage = ()=>{
//   return messages;
// }

const replyTheMessage = (login, id, msg) => {
  // id
  // console.log("sds")
  reply.value = true;
  reply_obj.value.message = msg;
  reply_obj.value.login = login;
  reply_obj.value.id = id;
}

onMounted(() => {
  getMessages();
  getUsers();
  getBranches();
})
</script>

<template>
  <main>
    <div class="chat-container">
      <div class="chat-left">
        <div class="chat">
          <div class="inner">
            <div class="messages" :style="{ height: reply ? '80%' : '90%', }">
              <div class="my-2" v-for="message in messages" :key="message.id">
                <div v-if="message.reply" class="reply flex p-2 w-full ">
                  <div class="reply_login ">
                    {{ message.reply_login }}
                  </div>
                  <div class="reply_body w-full bg-slate-300 rounded-lg text-sm mx-2">
                    {{ message.reply_msg }}
                  </div>

                </div>
                <div class="message flex shadow-md rounded-xl mx-auto ">
                  <div class="userImg m-1 h-full">
                    <img v-if="message.user_img" :src='API_BASE + `/images/${message.user_img}`' class="rounded-full"
                      width="50px" alt="" />
                    <img v-else src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
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
                  <div @click="replyTheMessage(message.user_login, message.message_id, message.message_txt)"
                    class="reply text-3xl cursor-pointer">
                    <i class="fas fa-reply"></i>
                  </div>
                </div>
              </div>


            </div>
            <div  class="send-mess">
              <div v-if="reply" class="rep p-3 flex w-full">
                <div class="loginRep">
                  {{ reply_obj.login }}
                </div>
                <div class="msgRep w-full mx-2 rounded-lg bg-slate-200">
                  {{ reply_obj.message }}
                </div>
                <div @click="reply = !reply" class="cancelRep cursor-pointer">
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div class="input-group">

                <div class="form-floating">

                  <textarea v-model="msg" class="form-control" placeholder="Leave a comment here"
                    id="floatingTextarea" maxlength="200"></textarea>
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

        <div class="pieChart ">
          <!-- <h5 class="m-4">Серверы</h5> -->
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
          height: 80%;
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
          height: 20%;
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
