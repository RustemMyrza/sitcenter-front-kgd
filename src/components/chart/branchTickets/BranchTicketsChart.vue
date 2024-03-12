<script setup>
const options = {
  chart: {
    height: 500,
    width: 1000,
    type: "bar",
    events: {},
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: true,
  },
  legend: {
    show: true,
  },
  xaxis: {
    categories: [
      ["John", "Doe"],
      ["Joe", "Smith"],
      ["Jake", "Williams"],
      "Amber",
      ["Peter", "Brown"],
      ["Mary", "Evans"],
      ["David", "Wilson"],
      ["Lily", "Roberts"],
    ],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
};

const series = [
  {
    data: [21, 22, 10, 28, 16, 21, 13, 30],
  },
];

const handleBarClick = (event, chartContext, config) => {
  console.log( chartContext);
  console.log(config)
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
