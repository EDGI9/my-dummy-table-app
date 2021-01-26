<template>
  <a-table :columns="tableColumns" :data-source="tableData">
    <a slot="name" slot-scope="title">{{ title }}</a>
    <span slot="status" slot-scope="status">
        <a-tag :key="status" color="green">
            {{ status.toUpperCase() }}
        </a-tag>
    </span>
    <span slot="action" slot-scope="text, record, index">
      <a>Edit</a>
      <a-divider type="vertical" />
      <a @click="removeTableRow(index)">Delete</a>
    </span>
  </a-table> 
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "Table",
    computed: {
        ...mapGetters ([
            "tableColumns",
            "tableData"
        ])
    },
    methods: {
        ...mapActions(['removeTableRow'])
    }
}
</script>

<style>

</style>