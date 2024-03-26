<script setup>
import axios from "axios";
import { onMounted, ref} from "vue";
const branches = ref([]);



const unFold = (id) => {
  const item = branches.value.find((e) => e.id === id);
  item.fold = !item.fold;
};

const getBranches = async () => {
  const token = localStorage.getItem("authToken");
  const result = await axios.get("http://localhost:3000/api/v1/branches", {
    headers: {
      bearer: token,
    },
  });
  console.log(result)
  branches.value = result.data.rows;

  
};



onMounted(() => {
  getBranches();
});
</script>
<template>
  <div class="server-container">
    <div class="server-container">
       <div class="drop">
        
        <div
          v-for="branch in branches"
          :key="branch.id"
          
          class="drop-item"
        >
          <div class="notfold" @click="unFold(branch.id)">
            <div class="item-name">
              <i class="fa-solid fa-plus mx-4"></i>
              <!-- <i v-if="branch.fold" class="fas fa-minus mx-4"></i> -->
              {{ branch.F_NAME }}
            </div>
            <div class="item-status"></div>
            <div class="item-amount">
             </div>
          </div>
          <div v-if="branch.fold" class="unfold">
            <div
              class="unfold-item"
              v-for="child in branch.children"
              :key="child.id"
            >
              <div class="unfold-name">{{ child.F_NAME }}</div>
              <!-- <div v-if="child.ONN === 1" class="unfold-status text-green-600">
                {{ "Меню-1" }}
              </div>
              <div v-else class="unfold-status text-red-600">
                {{ "Меню-2" }}
              </div> -->
              <div class="unfold-amount">
                <button type="button" class="btn btn-success text-white">Подключиться</button>
              </div>
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
    margin: 0.5rem;
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

        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.787);
        margin: .5rem;
        padding: .3rem;
        border-radius: .5rem;
        div {
          width: 100%;
        }
      }
    }
  }
}
</style>