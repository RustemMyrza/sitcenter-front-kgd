<script setup>
const branches = [
  {
    state: "New York",
    cities: [
      { name: "NY City", population: 10000, ages: [20, 30, 40, 50] },
      { name: "Albany", population: 5000, ages: [25, 35, 45, 55] },
    ]
  },
  {
    state: "California",
    cities: [
      { name: "Los Angeles", population: 15000, ages: [22, 32, 42, 52] },
      { name: "San Francisco", population: 7000, ages: [27, 37, 47, 57] },
    ]
  }
];

const options = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    categories: branches.map(branch => branch.state),
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
};

const series = branches.map(branch => ({
  name: branch.state,
  data: branch.cities.map(city => city.population),
}));

const handleBarClick = (event, chartContext, config) => {
  const stateIndex = config.dataPointIndex;
  const state = branches[stateIndex];
  console.log(`Clicked on state: ${state.state}`);
  console.log("Cities and their ages:");
  state.cities.forEach(city => {
    console.log(`${city.name}: ${city.ages.join(", ")}`);
  });
};
</script>

<template>
  <apexchart
    type="bar"
    :options="options"
    :series="series"
    @dataPointSelection="handleBarClick"
  ></apexchart>
</template>
