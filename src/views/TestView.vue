<script>
import {  onMounted, ref } from "vue";
import axios from "axios";
const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

export default {
  setup() {
    const options = ref({
      chartOptions: {
            chart: {
              height: 350,
              type: 'rangeBar'
            },
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '50%',
                rangeBarGroupRows: true
              }
            },
            colors: [
              "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
              "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
              "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
            ],
            fill: {
              type: 'solid'
            },
            xaxis: {
              type: 'datetime'
            },
            legend: {
              position: 'right'
            },
          
          },
          
          
        
    });

    const series = ref([
            // George Washington
            {
              name: 'George Washington',
              data: [
                {
                  x: 'President',
                  y: [
                    new Date(1789, 3, 30).getTime(),
                    new Date(1797, 2, 4).getTime()
                  ]
                },
              ]
            },
            // John Adams
            {
              name: 'John Adams',
              data: [
                {
                  x: 'President',
                  y: [
                    new Date(1797, 2, 4).getTime(),
                    new Date(1801, 2, 4).getTime()
                  ]
                },
                {
                  x: 'Vice President',
                  y: [
                    new Date(1789, 3, 21).getTime(),
                    new Date(1797, 2, 4).getTime()
                  ]
                }
              ]
            },
            // Thomas Jefferson
            {
              name: 'Thomas Jefferson',
              data: [
                {
                  x: 'President',
                  y: [
                    new Date(1801, 2, 4).getTime(),
                    new Date(1809, 2, 4).getTime()
                  ]
                },
                {
                  x: 'Vice President',
                  y: [
                    new Date(1797, 2, 4).getTime(),
                    new Date(1801, 2, 4).getTime()
                  ]
                },
                {
                  x: 'Secretary of State',
                  y: [
                    new Date(1790, 2, 22).getTime(),
                    new Date(1793, 11, 31).getTime()
                  ]
                }
              ]
            },
            // Aaron Burr
            {
              name: 'Aaron Burr',
              data: [
                {
                  x: 'Vice President',
                  y: [
                    new Date(1801, 2, 4).getTime(),
                    new Date(1805, 2, 4).getTime()
                  ]
                }
              ]
            }]);

    onMounted(async () => {
      await getChartMenuType();
    });

    const getChartMenuType = async () => {
        try {
          const url = `http://${host}:${port}/api/v1/branch-list/br/type`;
          const result = await axios.get(url, {
            headers: {
              bearer: localStorage.getItem("authToken")
            },
          });

          // Extract data from the API response
          const apiData = result.data;

          // Map the data to the format required by the chart
          const formattedData = apiData.map(item => ({
            name: `Branch ${item.branchId}`,
            data: item.times.map(time => ({
              x: `Branch ${item.branchId}`,
              y: [new Date(time.start).toLocaleTimeString(), time.stop ? new Date(time.stop).toLocaleTimeString() : new Date().toLocaleTimeString()]
            }))
          }));
          console.log(formattedData)
          // Update the series data with the formatted data
          series.value = formattedData;
        } catch (error) {
          console.error("Error fetching data from the API:", error);
        }
      };

    

    return {
      options,
      series
    };
  }
};
</script>


<template>
  <div class="changer-chart">
    <apexchart ref="apexChart" :height="400" :options="options" :series="series"></apexchart>
  </div>
</template>
