import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tableColumns: [
      {
        dataIndex: "name",
        key: "name",
        slots: { title: "customTitle" },
        scopedSlots: { customRender: "name" },
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        scopedSlots: { customRender: "tags" },
      },
      {
        title: "Action",
        key: "action",
        scopedSlots: { customRender: "action" },
      },
    ],
    tableData: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ],
  },
  getters: {
    tableColumns: (state) => {
      return state.tableColumns;
    },
    tableData: (state) => {
      return state.tableData;
    },
  },
  mutations: {
    addTableRow(state, payload) {
      this.tableData.push(payload);
    },
    removeTableRow(state) {
      /* Filter out the deleted row */
    },
  },
  actions: {
    addTableRow(context, payload) {
      context.commit("addTableRow", payload);
    },
    removeTableRow() {
      /* Filter out the deleted row */
    },
  },
  modules: {},
});
