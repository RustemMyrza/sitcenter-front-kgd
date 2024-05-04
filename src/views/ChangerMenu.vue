<script setup>
import axios from "axios";
import { onBeforeMount,  ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const branches = ref([]);
const isUgd = ref(true);

// const menuValue = ref("");

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

// const apexChart = ref(null);

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
   branches.value.map(branch=>{
    if(branch.F_ID === branchId){
      
      branch.children.map(ch=>{
        ch.isAvailable = !ch.isAvailable;
        ch.isSwitchable = !ch.isSwitchable;
        ch.blocked = ch.blocked === 0 ? 1 :0;
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

const getUsername = () => {
  return store.getters.username;
};

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

// const getChartMenuType = async()=>{
//   const url =  `http://${host}:${port}/api/v1/branch-list/br/type`;
//   const result = await axios.get(url, {
//     headers: {
//       bearer: localStorage.getItem("authToken")
//     },
//   });
//   console.log(result);
  
// }

// const options = ref({
//   chart: {
//     height: 450,
//     type: 'rangeBar'
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//       barHeight: '80%'
//     }
//   },
//   xaxis: {
//     type: 'datetime'
//   },
//   stroke: {
//     width: 1
//   },
//   fill: {
//     type: 'solid',
//     opacity: 0.6
//   },
//   legend: {
//     position: 'top',
//     horizontalAlign: 'left'
//   }

// });
// const series = ref([
//   {
//     name: 'Bob',
//     data: [
//       {
//         x: 'Design',
//         y: [
//           new Date('2019-03-05').getTime(),
//           new Date('2019-03-08').getTime()
//         ]
//       },
//       {
//         x: 'Code',
//         y: [
//           new Date('2019-03-02').getTime(),
//           new Date('2019-03-05').getTime()
//         ]
//       },
//       {
//         x: 'Code',
//         y: [
//           new Date('2019-03-05').getTime(),
//           new Date('2019-03-07').getTime()
//         ]
//       },
//       {
//         x: 'Test',
//         y: [
//           new Date('2019-03-03').getTime(),
//           new Date('2019-03-09').getTime()
//         ]
//       },
//       {
//         x: 'Test',
//         y: [
//           new Date('2019-03-08').getTime(),
//           new Date('2019-03-11').getTime()
//         ]
//       },
//       {
//         x: 'Validation',
//         y: [
//           new Date('2019-03-11').getTime(),
//           new Date('2019-03-16').getTime()
//         ]
//       },
//       {
//         x: 'Design',
//         y: [
//           new Date('2019-03-01').getTime(),
//           new Date('2019-03-03').getTime()
//         ],
//       }
//     ]
//   },
//   {
//     name: 'Joe',
//     data: [
//       {
//         x: 'Design',
//         y: [
//           new Date('2019-03-02').getTime(),
//           new Date('2019-03-05').getTime()
//         ]
//       },
//       {
//         x: 'Test',
//         y: [
//           new Date('2019-03-06').getTime(),
//           new Date('2019-03-16').getTime()
//         ],
//         goals: [
//           {
//             name: 'Break',
//             value: new Date('2019-03-10').getTime(),
//             strokeColor: '#CD2F2A'
//           }
//         ]
//       },
//       {
//         x: 'Code',
//         y: [
//           new Date('2019-03-03').getTime(),
//           new Date('2019-03-07').getTime()
//         ]
//       },
//       {
//         x: 'Deployment',
//         y: [
//           new Date('2019-03-20').getTime(),
//           new Date('2019-03-22').getTime()
//         ]
//       },
//       {
//         x: 'Design',
//         y: [
//           new Date('2019-03-10').getTime(),
//           new Date('2019-03-16').getTime()
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Dan',
//     data: [
//       {
//         x: 'Code',
//         y: [
//           new Date('2019-03-10').getTime(),
//           new Date('2019-03-17').getTime()
//         ]
//       },
//       {
//         x: 'Validation',
//         y: [
//           new Date('2019-03-05').getTime(),
//           new Date('2019-03-09').getTime()
//         ],
//         goals: [
//           {
//             name: 'Break',
//             value: new Date('2019-03-07').getTime(),
//             strokeColor: '#CD2F2A'
//           }
//         ]
//       },
//     ]
//   }
// ]);



onBeforeMount(()=>{
  console.log(getUsername());
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
          <div class="notfold" >
            <div @click="unFold(branch.id)" class="item-name w-4/6">
              <i   class="fas fa-plus mx-4"></i>
             
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
            <div class="unfold-item" v-for="child in branch.children" :key="child.id">
              <div class="unfold-name">{{ child.F_NAME }}</div>
              
              <div class="unfold-amount">
                <select v-model="child.menu" @change="changeMenu(child.F_ID, child.menu)"
                  :disabled="branch.blocked === 1 || !child.isSwitchable || !child.isAvailable" class="form-select"
                  aria-label="Default select example">
                  <option value="first" :selected="child.menu === 'first'">
                    Автоматическое
                  </option>
                  <option value="second" :selected="child.menu === 'second'">Меню-2</option>
                </select>
              </div>
              <div class="unfold-name">{{ child.menu }}</div>
              <div class="form-switch">
                <input @change="setBlock(child.F_ID, child.blocked)" class="form-check-input" type="checkbox"
                  role="switch" id="flexSwitchCheckChecked"
                  :disabled="branch.blocked === 1 || child.isSwitchable === false"
                  :checked="branch.blocked === 1 || child.isSwitchable === false" />
                <label class="form-check-label mx-4" for="flexSwitchCheckChecked">Блокировка меню</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="changer-chart">
        <!-- <apexchart ref="apexChart" :height="400" :options="options" :series="series"></apexchart> -->
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
}
</style>
