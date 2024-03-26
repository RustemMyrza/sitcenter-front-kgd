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
              <div class="message">
                <div class="userImg">
                  <img src="../assets/logo.png" width="50px" alt="" />
                </div>
                <div class="msg">Hello world</div>
              </div>
              <div class="message">
                <div class="userImg">
                  <img src="../assets/logo.png" width="50px" alt="" />
                </div>
                <div class="msg">Hello world</div>
              </div>
              <div class="message">
                <div class="userImg">
                  <img src="../assets/logo.png" width="50px" alt="" />
                </div>
                <div class="msg">Hello world</div>
              </div>
              <div class="message">
                <div class="userImg">
                  <img src="../assets/logo.png" width="50px" alt="" />
                </div>
                <div class="msg">Hello world</div>
              </div>
            </div>
            <div class="send-mess">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
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
        <div class="last">
            <div class="container">
                <div class="content">Content 1</div>
                <div class="content">Content 2</div>
                <div class="content">Content 3</div>
                <div class="content">Content 4</div>
                <div class="content">Content 5</div>
                <div class="content">Content 6</div>
                <div class="content">Content 7</div>
              </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
    width: 300px;
    height: 600px;
    overflow-y: scroll;
  
    transform: rotate(-90deg);
  }
  
  .content {
    width: 140px;
    height: 140px;
    margin: 10px;
  
    background-color: #a8a8df;
    
    transform: rotate(90deg);
  }
main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat-container {
  width: 100%;
  height: 80vh;
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
          .message {
            display: flex;
            justify-content: space-around;
            border: 1px solid black;
            border-radius: 0.5rem;
            .msg {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .send-mess {
          height: 10%;
          width: 100%;
        }
      }
    }
  }
  .right-chat {
    width: 50%;
    height: 100%;
    .pieChart {
      width: 100%;
      height: 80%;
    }
    .last {
      width: 20%;
      height: 50%;
      background-color: azure;
      overflow-x: auto;
      white-space: nowrap;
      transform: rotate(-90deg);
      .users {
        display:inline-block
      }
    }
  }
}
</style>

