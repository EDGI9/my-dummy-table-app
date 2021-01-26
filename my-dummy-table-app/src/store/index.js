import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDrawer: false,
    /* Table columns which will determine the table structure */
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
    /* Data for the the table rows */
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
    /* Enum for the statuses */
    statues: {
      DRAFT: "draft",
      PUBLISHED: "published",
      PENDING: "pending",
    },
    /* Edit object where we'll store the individual row object with the row data */
    rowToEdit: {},
    /* Edit flag fro the drawer */
    isEditMode: false,
  },
  getters: {
    showDrawer: (state) => {
      return state.showDrawer;
    },
    tableColumns: (state) => {
      return state.tableColumns;
    },
    tableData: (state) => {
      return state.tableData;
    },
    statuses: (state) => {
      return state.statues;
    },
    rowToEdit: (state) => {
      return state.rowToEdit;
    },
    isEditMode: (state) => {
      return state.isEditMode;
    },
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
      /* Based on the index of the row that we click to delete, we splice the array */
      state.tableData.splice(rowIndex, 1);
    },
    /* Every time we click to edit a row, we set the object with new data which will be edited */
    setTableRowToEdit(state, payload) {
      state.rowToEdit = { ...state.rowToEdit, ...payload };
    },
    /* After completing edit, we clean  the edit object */
    resetTableRowToEdit(state) {
      state.rowToEdit = {};
    },
    updateTable(state, payload) {
      state.tableData = payload;
    },
  },
  actions: {
    toggleDrawer({ state, commit }, booleanValue) {
      /* Each time we toggle we make sure that edit mode is disabled*/
      if (state.isEditMode) {
        commit("toggleEditMode", false);
      }
      commit("toggleDrawer", booleanValue);
    },
    addTableRow(context, payload) {
      /* Here we add our individual row */
      context.commit("addTableRow", payload);
      this._vm.$notification.success({
        message: `Success`,
        description: "A new row was added to the table",
        placement: "topRight",
      });
    },
    removeTableRow(context, rowIndex) {
      /* Here we add our individual row based on the index of the row that was clicked to be deleted*/
      context.commit("removeTableRow", rowIndex);
      this._vm.$notification.success({
        message: `Success`,
        description: "Row was removed from the table",
        placement: "topRight",
      });
    },
    setTableRowToEdit(context, payload) {
      /* We set the edit object containing the data of the row that we want to update */
      context.commit("setTableRowToEdit", payload);
      /* We toggle the drawer open and set the edit mode */
      context.commit("toggleDrawer", true);
      context.commit("toggleEditMode", true);
    },
    resetTableRowToEdit(context, payload) {
      context.commit("resetTableRowToEdit", payload);
    },
    updateTable(context, payload) {
      /* We update the table with newly edited data*/
      context.commit("updateTable", payload);
      /* We toggle the drawer after finishing editing*/
      context.commit("toggleEditMode", false);
      this._vm.$notification.success({
        message: `Success`,
        description: "Row was edited",
        placement: "topRight",
      });
    },
  },
  modules: {},
});
