<template>
  <div id="app">
    <Table/>
    <a-button @click="visible = true">Open drawer</a-button>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      @close="visible = false"
    >
      <TableRowForm @on-submit="processFormData"/>
    </a-drawer>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import TableRowForm from "./components/TableRowForm.vue";
import { mapActions } from "vuex"

export default {
  name: "App",
  components: {
    Table,
    TableRowForm
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    ...mapActions([
      'addTableRow'
    ]),
    processFormData(formData) {
      let body = {id: Math.floor(Math.random()*10000) , ...formData}
      this.addTableRow(body)
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
