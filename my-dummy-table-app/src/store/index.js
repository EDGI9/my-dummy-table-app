import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tableColumns: [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        scopedSlots: { customRender: "title" },
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        scopedSlots: { customRender: "status" },
      },
      {
        title: "Action",
        key: "action",
        scopedSlots: { customRender: "action" },
      },
    ],
    tableData: [
      {
        id: 1,
        title: "John Brown",
        status: "nice",
      },
      {
        id: 2,
        title: "Jim Green",
        status: "loser",
      },
      {
        id: 3,
        title: "Joe Black",
        status: "teacher",
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
      state.tableData.push(payload);
    },
    removeTableRow(state) {
      console.log(state);
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
