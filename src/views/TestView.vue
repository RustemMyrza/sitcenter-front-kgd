<template>
  <div>
    <table ref="dataTable" class="display" style="width:100%"></table>
    <button @click="previousPage">Previous Page</button>
    <button @click="nextPage">Next Page</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

const dataTable = ref(null);
let currentPage = 1;
const itemsPerPage = 10;

onMounted(async () => {
  await fetchData();
});

async function fetchData() {
  const response = await fetch(`/your-api-endpoint?page=${currentPage}&per_page=${itemsPerPage}`);
  const data = await response.json();
  
  $(dataTable.value).DataTable({
    data: data.items, // Assuming your API response contains a property named 'items' that holds the array of data
    columns: [
      { data: 'id', title: 'ID' },
      { data: 'name', title: 'Name' }
      // Add more columns as needed
    ]
  });
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    reloadDataTable();
  }
}

function nextPage() {
  currentPage++;
  reloadDataTable();
}

function reloadDataTable() {
  $(dataTable.value).DataTable().destroy(); // Destroy the current DataTable instance
  fetchData(); // Fetch data for the new page
}
</script>

<style>
/* Your CSS styles */
</style>
