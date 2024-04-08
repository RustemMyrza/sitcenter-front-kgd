<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useStore } from 'vuex';

const store = useStore();

const branches = ref([]);
const isUgd = ref(true);

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const unFold = (id) => {
  const item = branches.value.find((e) => e.id === id);
  item.fold = !item.fold;
};

const getBranches = async () => {
  const token = localStorage.getItem("authToken");
  const result = await axios.get(`http://${host}:${port}/api/v1/branches`, {
    headers: {
      bearer: token,
    },
  });
  branches.value = result.data.rows;
  branches.value = branches.value.map((branch) => {
    // Map over the children array and modify each child object
    branch.children = branch.children.map((child) => {
      // Create a new object with the existing attributes and the new attribute
      return {
        ...child,
        isAvailable: false, // Modify as needed
      };
    });
    if(branch.children.length >1){
      isUgd.value = false;
    }
    
    
    // Return the modified branch object
    return branch;
  });
  // console.log(branches.value)



  // console.log(branches.value);
  // const available = await axios.get(
  //   `http://${host}:${port}/api/v1/branch-list`,
  //   {
  //     headers: {
  //       bearer: token,
  //     },
  //   }
  // );
  // // console.log(available.data);
  // branches.value.map((branch) => {
  //   branch.children.map((ch) => {
  //     const av = available.data.find((e) => e.branchId === ch.F_ID);
  //     if (av) {
  //       console.log(av);
  //     }
  //   });
  // });
};

const isAvailableToSwitch = async () => {

}
const setBlock = async (branchId, blockedValue) => {
  // console.log(branchId)
  let url = `http://${host}:${port}/api/v1/branch-list/block/${branchId}`;
  if (blockedValue === 1) {
    url += `?value=0`;
  }
  else url += `?value=1`;
  const token = localStorage.getItem("authToken");
  try {
    const result = await axios.post(url, null, {
      headers: {
        bearer:token,
      },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

const getUsername = () => {
  return store.getters.username;
}

onMounted(() => {
  console.log(getUsername())
  getBranches();
});
</script>
<template>
  <div class="server-container">
    <div class="server-container">

      <div class="drop">
        <div class="title-drop">
          <div>Название</div>
          <div class="text-center">Меню</div>
          <div class="text-center">Действие блок</div>
        </div>
        <div v-for="branch in branches" :key="branch.id" class="drop-item">
          <div class="notfold" @click="unFold(branch.id)">
            <div class="item-name">
              <i class="fa-solid fa-plus mx-4"></i>
              <!-- <i v-if="branch.fold" class="fas fa-minus mx-4"></i> -->
              {{ branch.F_NAME }}
            </div>
            <div class="item-status"></div>
            <div class="item-amount">
              <div v-if="!isUgd" class=" form-switch">
                <input @change="setBlock(branch.F_ID,branch.blocked)" :disabled="branch.blocked === 0" class="form-check-input" type="checkbox" role="switch"
                  id="flexSwitchCheckChecked" :checked="branch.blocked === 1">
                <label class="form-check-label mx-4" for="flexSwitchCheckChecked">Блокировка меню</label>
              </div>
            </div>
          </div>
          <div v-if="branch.fold" class="unfold">
            <div class="unfold-item" v-for="child in branch.children" :key="child.id">
              <div class="unfold-name">{{ child.F_NAME }}</div>

              <div class="unfold-amount">
                <select :disabled="!child.isAvailable && child.blocked !== 1" class="form-select"
                  aria-label="Default select example">
                  <option value="1" :selected="child.ONN === 1">
                    Автоматическое
                  </option>
                  <option value="2" :selected="child.ONN === 0">Меню-2</option>
                </select>

              </div>
              <div class="form-switch">
                <input @change="setBlock(child.F_ID, child.blocked)" class="form-check-input" type="checkbox" role="switch"
                  id="flexSwitchCheckChecked" :checked="child.blocked === 1">
                <label class="form-check-label mx-4" for="flexSwitchCheckChecked">Блокировка меню</label>
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
    margin: 1rem;
    width: 100%;
    text-align: center;

    div {
      width: 100%;
    }
  }

  .drop-item {
    cursor: pointer;
    width: 100%;
    margin: 0.5rem 0.5rem;
    padding: 0.6rem;
    background-color: rgba(244, 244, 244, 0.675);
    border-radius: 0.5rem;
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

        justify-content: space-around;
        background-color: rgba(255, 255, 255, 0.787);
        margin: 0.5rem;
        padding: 0.3rem;
        border-radius: 0.5rem;

        div {
          margin: 1rem;
          width: 100%;
        }
      }
    }
  }
}</style>
