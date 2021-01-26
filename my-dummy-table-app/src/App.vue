<template>
  <div id="app">
    <a-row :gutter="18" type="flex" justify="end"> 
        <a-col :span="12">
          <!-- Toggle drawer -->
          <a-button @click="toggleDrawer(true)">Add row</a-button>
        </a-col>
    </a-row>
    <a-row :gutter="16" type="flex" justify="center">
      <a-col :span="12">
        <!-- Table where we display our data -->
        <Table />
      </a-col>
    </a-row>
    <!-- Drawer where we keep our table forms-->
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="showDrawer"
      @close="toggleDrawer(false)"
    >
      <!-- If in EditMode display edit form -->
      <TableRowEditForm v-if="isEditMode" @on-submit="processEditTableRow" />
      <!-- else display normal form -->
      <TableRowForm v-else @on-submit="processAddTableRow" />
    </a-drawer>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import TableRowForm from "./components/TableRowForm.vue";
import TableRowEditForm from "./components/TableRowEditForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Table,
    TableRowForm,
    TableRowEditForm
  },
  computed: {
    ...mapGetters(["isEditMode", "showDrawer", "tableData"])
  },
  methods: {
    ...mapActions([
      "addTableRow",
      "toggleDrawer",
      "updateTable",
      "resetTableRowToEdit"
    ]),
    processEditTableRow(payload) {
      /* We create a copy of the array using the map method */
      const body = this.tableData.map(item => {
        /* If the id of the table data is equal to the id of the edited object, we update that 
        object with the values from the edited object using the spread method  */
        if (item.id === payload.id) {
          return { ...item, ...payload };
        }
        /* Otherwise return unchanged object */
        return item;
      });
      this.updateTable(body);
      this.resetTableRowToEdit();
      this.toggleDrawer(false);
    },
    processAddTableRow(formData) {
      /* When adding a new row, we set a random number so that we have some sort of unique id */
      const body = { id: Math.floor(Math.random() * 10000), ...formData };
      this.addTableRow(body);
      this.toggleDrawer(false);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
