import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDrawer: false,
    tableColumns: [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        scopedSlots: { customRender: "title" }
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        scopedSlots: { customRender: "status" }
      },
      {
        title: "Action",
        key: "action",
        scopedSlots: { customRender: "action" }
      }
    ],
    tableData: [
      {
        id: 1,
        title: "John Brown",
        status: "published"
      },
      {
        id: 2,
        title: "Jim Green",
        status: "draft"
      },
      {
        id: 3,
        title: "Joe Black",
        status: "pending"
      }
    ],
    statues: {
      DRAFT: "draft",
      PUBLISHED: "published",
      PENDING: "pending"
    },
    rowToEdit: {},
    isEditMode: false
  },
  getters: {
    showDrawer: state => {
      return state.showDrawer;
    },
    tableColumns: state => {
      return state.tableColumns;
    },
    tableData: state => {
      return state.tableData;
    },
    statuses: state => {
      return state.statues;
    },
    rowToEdit: state => {
      return state.rowToEdit;
    },
    isEditMode: state => {
      return state.isEditMode;
    }
  },
  mutations: {
    toggleDrawer(state, booleanValue) {
      state.showDrawer = booleanValue;
    },
    toggleEditMode(state, booleanValue) {
      state.isEditMode = booleanValue;
    },
    addTableRow(state, payload) {
      state.tableData.push(payload);
    },
    removeTableRow(state, rowIndex) {
      state.tableData.splice(rowIndex, 1);
    },
    setTableRowToEdit(state, payload) {
      state.rowToEdit = { ...state.rowToEdit, ...payload };
    },
    resetTableRowToEdit(state) {
      state.rowToEdit = {};
    },
    updateTableRow(state, payload) {
      state.tableData = payload;
    }
  },
  actions: {
    toggleDrawer({ state, commit }, booleanValue) {
      commit("toggleDrawer", booleanValue);
      if (state.isEditMode) {
        commit("toggleEditMode", false);
      }
    },
    addTableRow(context, payload) {
      context.commit("addTableRow", payload);
      this._vm.$notification.success({
        message: `Success`,
        description: "A new row was added to the table",
        placement: "topRight"
      });
    },
    removeTableRow(context, rowIndex) {
      context.commit("removeTableRow", rowIndex);
      this._vm.$notification.success({
        message: `Success`,
        description: "Row was removed from the table",
        placement: "topRight"
      });
    },
    setTableRowToEdit(context, payload) {
      context.commit("setTableRowToEdit", payload);
      context.commit("toggleDrawer", true);
      context.commit("toggleEditMode", true);
    },
    resetTableRowToEdit(context, payload) {
      context.commit("resetTableRowToEdit", payload);
    },
    updateTableRow(context, payload) {
      context.commit("updateTableRow", payload);
      context.commit("toggleEditMode", false);
    }
  },
  modules: {}
});
