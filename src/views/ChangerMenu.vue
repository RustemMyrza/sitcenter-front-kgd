<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";
const branches = ref([]);

const filterKeyword = ref("all");

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
    <div class="title"><h3>Переключение режимов меню</h3></div>
    <div class="server-container">
      <!-- <div class="controls flex text-white">
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
            @click="filterKeyword = 'onn'"
            class="btn btn-success"
          >
            Меню-1
          </button>
        </div>
        <div class="control">
          <button
            type="button"
            @click="filterKeyword = 'off'"
            class="btn btn-danger"
          >
            Меню-2
          </button>
        </div>
      </div> -->
      <div class="drop">
        <div class="title-drop">
          <div>Название</div>
          <div class="text-center">Меню</div>
          
        </div>
        <div
          v-for="branch in filteredBranches"
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
              <!-- <div v-if="child.ONN === 1" class="unfold-status text-green-600">
                {{ "Меню-1" }}
              </div>
              <div v-else class="unfold-status text-red-600">
                {{ "Меню-2" }}
              </div> -->
              <div class="unfold-amount">
                <select class="form-select" aria-label="Default select example">
                    <option value="1" :selected="child.ONN ===1">Меню-1</option>
                    <option value="2"  :selected="child.ONN ===0">Меню-2</option>
                    
                  </select>
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
    margin: 1rem 0.5rem;
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
        div {
          width: 100%;
        }
      }
    }
  }
}
</style>