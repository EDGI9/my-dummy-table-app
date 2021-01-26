<template>
  <a-table :columns="tableColumns" :data-source="tableData">
    <a slot="name" slot-scope="title">{{ title }}</a>
    <span slot="status" slot-scope="status">
        <a-tag :key="status" :color="getStatusColor(status)">
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
            "tableData",
            "statuses"
        ])
    },
    methods: {
        ...mapActions(['removeTableRow']),
        getStatusColor(status) {
            let color = ""
            switch (status) {
                case this.statuses.PUBLISHED:
                    color = "green"
                    break;
                case this.statuses.PENDING:
                    color = "pink"
                    break;
                case this.statuses.DRAFT:
                default:
                    color = "gray"
                    break;
            }
            return color
        }
    }
}
</script>

<style>

</style>