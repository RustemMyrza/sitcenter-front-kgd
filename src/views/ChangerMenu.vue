<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import CanvasComponent from "@/components/chart/CanvasComponent.vue";
// import { useStore } from "vuex";

// const store = useStore();

const branches = ref([]);
const isUgd = ref(true);

const componentKey = ref(0);


// const eventData = [
//   // Event 1: Starts at 09:00 and ends at 12:00, yPos is the y-position of the line
//   { start: "9:00", end: "12:34", yPos: 20, color: "red" },  // Event 3: Starts at 12:00 and ends at 17:00, yPos is the y-position of the line
// ]
// const menuValue = ref("");

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

// const apexChart = ref(null);

const forceRerender = () => {
  componentKey.value += 1;
};

const unFold = (id) => {
  const item = branches.value.find((e) => e.id === id);
  item.fold = !item.fold;
  if (item.fold)
    getChartMenuType(id);
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
    if (branch.children.length > 1) {
      isUgd.value = false;
    }
    // Map over the children array and modify each child object
    const currentRole = localStorage.getItem("role") * 1;
    const blockedByRole = branch.blocked_by;
    const blocked = branch.blocked;
    // console.log("current", typeof currentRole);
    // console.log("blocked", blockedByRole);
    if (blocked === 1) {
      branch.isSwitchable =
        currentRole === 2 && blockedByRole === 0
          ? false
          : currentRole === 3 && blockedByRole === 2
            ? false
            : true;
    } else branch.isSwitchable = true;

    branch.children.map((child) => {
      const blockedByRole = child.blocked_by;
      const blocked = child.blocked;

      child.isAvailable = false;
      child.menu = "first";
      // Create a new object with the existing attributes and the new attribute
      if (blocked === 1) {
        child.isSwitchable =
          currentRole === 2 && blockedByRole === 0
            ? false
            : currentRole === 3 && blockedByRole === 2
              ? false : currentRole === 3 && blockedByRole === 0 ? false
                : true;
      } else child.isSwitchable = true;
    });

    // Return the modified branch object
    return branch;
  });



  // console.log(branches.value);
  try {
    const available = await axios.get(
      `http://${host}:${port}/api/v1/branch-list`,
      {
        headers: {
          bearer: token,
        },
      }
    );
    // console.log(available.data);
    branches.value.map((branch) => {
      branch.children.map((ch) => {
        const av = available.data.find((e) => e.branchId === ch.F_ID);
        if (av) {
          ch.isAvailable = true;
          ch.menu = av.brtype;
          // console.log(av.brtype);
        }
      });
    });
    // console.log(branches.value)
  } catch (err) {
    console.log(err);
  }

};

const setBlock = async (branchId, blockedValue) => {
  // console.log(branchId)
  let url = `http://${host}:${port}/api/v1/branch-list/block/${branchId}`;
  if (blockedValue === 1) {
    url += `?value=0`;
  } else {

    url += `?value=1`;

  }
  branches.value.map(branch => {
    if (branch.F_ID === branchId) {

      branch.children.map(ch => {
        ch.isAvailable = !ch.isAvailable;
        ch.isSwitchable = !ch.isSwitchable;
        ch.blocked = ch.blocked === 0 ? 1 : 0;
      })
    }
  });
  //  console.log(branches.value)

  // console.log(parent)
  const token = localStorage.getItem("authToken");
  try {
    await axios.post(url, null, {
      headers: {
        bearer: token,
      },
    });
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// const getUsername = () => {
//   return store.getters.username;
// };

const changeMenu = async (id, menu) => {
  // console.log(id, menu)
  const url = `http://${host}:${port}/api/v1/branch-list/${id}`;
  try {
    await axios.post(url,
      {
        menuValue: menu
      }, {
      headers: {
        bearer: localStorage.getItem("authToken")
      }
    });
  } catch (err) {
    console.log(err);
  }


}

const getChartMenuType = async (id) => {
  // Find the branch with the specified ID
  const branch = branches.value.find(e => e.id === id);

  // Check if the branch with the specified ID exists
  if (branch) {
    // Map over the children branches and fetch menu types for each
    const promises = branch.children.map(async (child) => {
      child.eventData = [];
      try {
        const url = `http://${host}:${port}/api/v1/branch-list/br/type/${child.F_ID}`;
        const result = await axios.get(url, {
          headers: {
            bearer: localStorage.getItem("authToken")
          },
        });
        const schedule = result.data[`branchId: ${child.F_ID}`];
        // console.log(schedule);
        schedule.map(e => {
          const eventObject = {
            start: e.start,
            end: e.end,
            yPos: 30,
            // color:"red"
            color: e.menutype === "first" ? "blue" : "green",
          }

          child.eventData.push(eventObject);

        })
        branches.value = [...branches.value];
        forceRerender();
      } catch (error) {
        console.error('Error fetching menu types for child branch:', error);
      }
    });

    // Wait for all promises to resolve
    await Promise.all(promises);

    // console.log('All menu types fetched');
  } else {
    console.error('Branch not found');
  }
};







onMounted(() => {

  getBranches();

  // getChartMenuType();
})

</script>
<template>
  <div class="server-container">
    <div class="server-container">
      <div class="drop">
        <div class="title-drop">
          <div>Название</div>
          <div class="text-center">Переключение</div>
          <div class="text-center">Меню</div>
          <div class="text-center">Действие блок</div>
        </div>
        <div v-for="branch in branches" :key="branch.id" class="drop-item">
          <div class="notfold h-full">
            <div @click="unFold(branch.id)" class="item-name w-4/6 h-full">
              <i class="fas fa-plus mx-4"></i>

              {{ branch.F_NAME }}
            </div>

            <div class="item-amount w-2/6">
              <div v-if="!isUgd" class="form-switch">
                <input @change="setBlock(branch.F_ID, branch.blocked)" :disabled="branch.isSwitchable === false"
                  class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                  :checked="branch.blocked === 1" />
                <label class="form-check-label mx-4" for="flexSwitchCheckChecked">Блокировка меню</label>
              </div>
            </div>
          </div>
          <div v-if="branch.fold" class="unfold">
            <div class="unfold-wrapper" v-for="child in branch.children" :key="child.id">
              <div class="unfold-item">
                <div class="unfold-name">{{ child.F_NAME }}</div>

                <div class="unfold-amount">
                  <select v-model="child.menu" @change="changeMenu(child.F_ID, child.menu)"
                    :disabled="branch.blocked === 1 || !child.isSwitchable || !child.isAvailable || (child.menu !== 'first' && child.menu !== 'second' )" class="form-select"
                    aria-label="Default select example">
                    <option value="first" :selected="child.menu === 'first'">
                      Автоматическое
                    </option>
                    <option value="second" :selected="child.menu === 'second'">Меню-2</option>
                  </select>
                </div>
                <div class="unfold-name">{{ child.menu === "first" ? "Автоматический" : "Меню-2" }}</div>
                <div class="form-switch">
                  <input @change="setBlock(child.F_ID, child.blocked)" class="form-check-input" type="checkbox"
                    role="switch" id="flexSwitchCheckChecked"
                    :disabled="branch.blocked === 1 || child.isSwitchable === false"
                    :checked="branch.blocked === 1 || child.isSwitchable === false" />
                  <label class="form-check-label mx-4" for="flexSwitchCheckChecked">Блокировка меню</label>
                </div>

              </div>
              <div class="menu-chart">
                <div class="menu-legends flex justify-center">
                  <div class="menu mx-2 flex">
                    <div id="first"></div>
                    <div class="flex justify-center items-center mx-2">Меню-1</div>
                  </div>
                  <div class="menu mx-2 flex"><span id="second"></span>
                    <div class="flex justify-center items-center mx-2">Меню-2</div>
                  </div>
                </div>
                <div class="chart">
                  <CanvasComponent :key="componentKey" v-if="branch.fold" class="mx-auto" :canvasWidth="1000"
                    :canvasHeight="100" :eventData="child.eventData" />
                </div>
              </div>
              <div>
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

#first {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: blue;
}

#second {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: green;
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



      .item-name {
        display: flex;

        align-items: center;
        text-align: center;
      }
    }

    .unfold {
      margin-top: 1rem;
      width: 100%;

      .unfold-wrapper {
        background-color: rgba(255, 255, 255, 0.787);
        margin: 0.5rem;
        padding: 0.3rem;
        border-radius: 0.5rem;
      }

      .unfold-item {
        display: flex;

        justify-content: space-around;


        div {
          margin: 1rem;
          width: 100%;
        }
      }
    }
  }
}
</style>
