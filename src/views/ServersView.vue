<script setup>
import axios from "axios";
import {  onMounted, ref, computed } from "vue";
const branches = ref([]);

const filterKeyword = ref("all");

const unFold = (id) => {
  const item = branches.value.find((e) => e.id === id);
  item.fold = !item.fold;
};


const getBranches = async() => {
  const token = localStorage.getItem("authToken");
  const result = await axios
    .get("http://localhost:3000/api/v1/branches", {
      headers: {
        bearer: token,
      },
    })
    branches.value = result.data.rows;

      // Calculate onlineSize for each branch
      branches.value.map((element) => {
        let online = 0;
        element.children.forEach((el) => {
          if (el.ONN === 1) {
            online += 1;
          }
        });
        element.onlineSize = online;
        element.fold = false;
      });
    
};


const filterOnline = ()=>{
    const a = branches.value.filter(e=>{
      return e.children.map((el)=>el.ONN === 1);
      
    });
    console.log(a);
}

const filteredBranches = computed(() => {
  const keyword = filterKeyword.value.toLowerCase().trim();
  if (keyword === "onn") {
    return branches.value.filter((branch) =>
      branch.children.some((child) => child.ONN === 1)
    );
  } else if (keyword === "off") {
    return branches.value.filter((branch) =>
      branch.children.every((child) => child.ONN === 0)
    );
  }
  return branches.value;
});




onMounted(() => {
  getBranches();
});
</script>
<template>
  <div class="server-container">
    <div class="server-container">
      <div class="controls flex text-white">
        <div class="control">
          <button
            type="button"
            @click="filterKeyword = 'all'"
            class="btn btn-secondary"
          >
            Все
          </button>
        </div>
        <div class="control">
          <button
            type="button"
            @click="filterOnline()"
            class="btn btn-success"
          >
            Доступные
          </button>
        </div>
        <div class="control">
          <button
            type="button"
            @click="filterKeyword = 'off'"
            class="btn btn-danger"
          >
            Недоступные
          </button>
        </div>
      </div>
      <div class="drop">
        <div class="title-drop">
          <div>Название</div>
          <div class="text-center">Статус</div>
          <div>Количество доступных/всего</div>
        </div>
        <div
          v-for="branch in filteredBranches"
          :key="branch.id"
          @click="unFold(branch.id)"
          class="drop-item"
        >
          <div class="notfold">
            <div class="item-name">
              <i  class="fa-solid fa-plus mx-4"></i>
              <!-- <i v-if="branch.fold" class="fas fa-minus mx-4"></i> -->
              {{ branch.F_NAME }}
            </div>
            <div class="item-status"></div>
            <div class="item-amount">
              {{ branch.onlineSize }}/{{ branch.children.length }}
            </div>
          </div>
          <div v-if="branch.fold" class="unfold">
            <div
              class="unfold-item"
              v-for="child in branch.children"
              :key="child.id"
            >
              <div class="unfold-name">{{ child.F_NAME }}</div>
              <div v-if="child.ONN === 1" class="unfold-status text-green-600">
               <i> {{ "Доступно" }}</i>
              </div>
              <div v-else class="unfold-status text-red-600">
               <i> {{ "Нет соединения" }}</i>
              </div>
              <div class="unfold-amount"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.server-container {
  padding: 1rem;
}
.control {
  margin: 0.5rem;
}
.drop {
  margin: 1rem auto;
  .title-drop {
    display: flex;
    justify-content: space-between;
    margin: .5rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
    div {
      width: 100%;
    }
  }
  .drop-item {
    cursor: pointer;
    width: 100%;
    margin: .5rem 0.5rem;
    padding: .6rem;
    background-color: rgba(244, 244, 244, 0.675);
    border-radius: .5rem;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  
    .notfold {
      display: flex;
      justify-content: space-between;
      div {
        width: 100%;
      }
      .item-name {
        display: flex;

        align-items: center;
        text-align: center;
      }
    }

    .unfold {
      margin-top: 1rem;
      width: 100%;
      .unfold-item {
        display: flex;
        background-color: rgba(255, 255, 255, 0.787);
        margin: .5rem;
        padding: .3rem;
        border-radius: .5rem;
        justify-content: space-between;
        div {
          width: 100%;
        }
      }
    }
  }
}
</style>