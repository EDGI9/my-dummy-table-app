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
      <!-- Add basic form -->
    </a-drawer>
  </div>
</template>

<script>
import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Table
  },
  data() {
    return {
      visible: false,
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
