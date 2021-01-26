<template>
  <div id="app">
    <Table />
    <a-button @click="toggleDrawer(true)">Open drawer</a-button>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="showDrawer"
      @close="toggleDrawer(false)"
    >
      <TableRowEditForm v-if="isEditMode" @on-submit="processEditTableRow" />
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
      "updateTableRow",
      "resetTableRowToEdit"
    ]),
    processEditTableRow(payload) {
      const body = this.tableData.map(item => {
        if (item.id === payload.id) {
          return { ...item, ...payload };
        }
        return item;
      });
      this.updateTableRow(body);
      this.resetTableRowToEdit();
      this.toggleDrawer(false);
    },
    processAddTableRow(formData) {
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
