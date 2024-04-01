<script setup>
import { ref } from "vue";
const pie = ref({
  options: {
    chart: {
      width: 380,
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
            position: "bottom",
          },
        },
      },
    ],
  },
  series: [44, 55, 13, 43, 22],
});
</script>

<template>
  <main>
    <div class="chat-container">
      <div class="chat-left">
        <div class="chat">
          <div class="inner">
            <div class="messages">
              <div class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg  m-1  h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">kgd</div>
                </div>
                <div class="msg p-2 m-1 w-full  h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsam eius qui provident rerum? Laudantium, iusto ab! Distinctio molestiae, maxime rerum cupiditate iste accusantium soluta, ea reprehenderit, cum temporibus reiciendis.
                  </div>
                  <div class="msg-date float-right text-sm">10.10.12 12:44:11</div>
                </div>
              </div>
              <div class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg  m-1  h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">kgd</div>
                </div>
                <div class="msg p-2 m-1 w-full  h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsam eius qui provident rerum? Laudantium, iusto ab! Distinctio molestiae, maxime rerum cupiditate iste accusantium soluta, ea reprehenderit, cum temporibus reiciendis.
                  </div>
                  <div class="msg-date float-right text-sm">10.10.12 12:44:11</div>
                </div>
              </div>
              <div class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg  m-1  h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">kgd</div>
                </div>
                <div class="msg p-2 m-1 w-full  h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsam eius qui provident rerum? Laudantium, iusto ab! Distinctio molestiae, maxime rerum cupiditate iste accusantium soluta, ea reprehenderit, cum temporibus reiciendis.
                  </div>
                  <div class="msg-date float-right text-sm">10.10.12 12:44:11</div>
                </div>
              </div>
              <div class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg  m-1  h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">kgd</div>
                </div>
                <div class="msg p-2 m-1 w-full  h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsam eius qui provident rerum? Laudantium, iusto ab! Distinctio molestiae, maxime rerum cupiditate iste accusantium soluta, ea reprehenderit, cum temporibus reiciendis.
                  </div>
                  <div class="msg-date float-right text-sm">10.10.12 12:44:11</div>
                </div>
              </div>
              <div class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg  m-1  h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">kgd</div>
                </div>
                <div class="msg p-2 m-1 w-full  h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsam eius qui provident rerum? Laudantium, iusto ab! Distinctio molestiae, maxime rerum cupiditate iste accusantium soluta, ea reprehenderit, cum temporibus reiciendis.
                  </div>
                  <div class="msg-date float-right text-sm">10.10.12 12:44:11</div>
                </div>
              </div>
              <div class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg  m-1  h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">kgd</div>
                </div>
                <div class="msg p-2 m-1 w-full  h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsam eius qui provident rerum? Laudantium, iusto ab! Distinctio molestiae, maxime rerum cupiditate iste accusantium soluta, ea reprehenderit, cum temporibus reiciendis.
                  </div>
                  <div class="msg-date float-right text-sm">10.10.12 12:44:11</div>
                </div>
              </div>
              <div class="message flex shadow-md rounded-xl mx-auto my-3">
                <div class="userImg  m-1  h-full">
                  <img src="../assets/avatart.jpg" class="rounded-full" width="50px" alt="" />
                  <div class="login m-2">kgd</div>
                </div>
                <div class="msg p-2 m-1 w-full  h-full">
                  <div class="msg-body text-left bg-gray-100 rounded-lg p-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsam eius qui provident rerum? Laudantium, iusto ab! Distinctio molestiae, maxime rerum cupiditate iste accusantium soluta, ea reprehenderit, cum temporibus reiciendis.
                  </div>
                  <div class="msg-date float-right text-sm">10.10.12 12:44:11</div>
                </div>
              </div>
            
            </div>
            <div class="send-mess">
              <div class="input-group ">
                <div class="form-floating">
                  <textarea class="form-control " placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Сообщение...</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-chat">
        <div class="pieChart">
          <apexchart
            :height="300"
            :options="pie.options"
            :series="pie.series"
          ></apexchart>
        </div>
        <div class="last-container p-3">
            <div class="title m-2"><h5>Последние заходившие</h5></div>
          <div class="flex overflow-x-auto space-x-8 w-full ">
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
            </section>
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
            </section>
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
            </section>
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
            </section>
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
            </section>
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
            </section>
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
            </section>
            <section class="flex-shrink-0 rounded-full border-2 ">
              <span><img src="../assets/avatart.jpg" class=" h-24 w-24 rounded-full border-2 " alt=""
              /></span>
              <span>kgd</span>
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
      padding: 1rem;
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
          
        }
        .send-mess {
          height: 10%;
          width: 100%;
          .input-group{
            .form-floating{
              textarea{
                border-radius: 0 0 1rem 1rem ;
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
    }
    .last-container{
      width: 100%;
      height: 30%;
    }
    
  }
}
</style>

