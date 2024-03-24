<template>
    dasd
</template>

<!-- <template>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="expandAll">
          <v-icon>{{ allExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        item-key="name"
      >
        <template v-for="(header, index) in headers" v-slot:[`item.${header.value}`]="{ item }">
          <template v-if="header.value === 'name'">
            {{ item[header.value] }}
          </template>
          <template v-else>
            <v-row v-if="columnFilters[header.value].expanded">
              <v-col>
                <v-text-field
                  v-model="columnFilters[header.value].filter"
                  label="Filter"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn icon @click="toggleFilter(header.value)">
              <v-icon>{{ columnFilters[header.value].expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </template>
        </template>
      </v-data-table>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        allExpanded: false,
        search: '',
        headers: [
          { text: 'Dessert (100g serving)', value: 'name' },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: 1 },
          { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: 1 },
        ],
        columnFilters: {
          calories: { filter: '', expanded: false },
          fat: { filter: '', expanded: false },
          carbs: { filter: '', expanded: false },
          protein: { filter: '', expanded: false },
          iron: { filter: '', expanded: false },
        },
      };
    },
    methods: {
      toggleFilter(column) {
        this.$set(this.columnFilters[column], 'expanded', !this.columnFilters[column].expanded);
      },
      expandAll() {
        this.allExpanded = !this.allExpanded;
        for (const filter in this.columnFilters) {
          this.columnFilters[filter].expanded = this.allExpanded;
        }
      },
    },
  };
  </script>
   -->