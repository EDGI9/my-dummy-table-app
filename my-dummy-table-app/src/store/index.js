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
        status: "published",
      },
      {
        id: 2,
        title: "Jim Green",
        status: "draft",
      },
      {
        id: 3,
        title: "Joe Black",
        status: "pending",
      },
    ],
    statues: {
      DRAFT: "draft",
      PUBLISHED: "published",
      PENDING: "pending",
    },
  },
  getters: {
    tableColumns: (state) => {
      return state.tableColumns;
    },
    tableData: (state) => {
      return state.tableData;
    },
    statuses: (state) => {
      return state.statues;
    },
  },
  mutations: {
    addTableRow(state, payload) {
      state.tableData.push(payload);
    },
    removeTableRow(state, rowIndex) {
      state.tableData.splice(rowIndex, 1);
    },
  },
  actions: {
    addTableRow(context, payload) {
      context.commit("addTableRow", payload);
      this._vm.$notification.success({
        message: `Success`,
        description: "A new row was added to the table",
        placement: "topRight",
      });
    },
    removeTableRow(context, rowIndex) {
      context.commit("removeTableRow", rowIndex);
      this._vm.$notification.success({
        message: `Success`,
        description: "Row was removed from the table",
        placement: "topRight",
      });
    },
  },
  modules: {},
});
