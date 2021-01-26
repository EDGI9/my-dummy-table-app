<template>
  <a-table :columns="tableColumns" :data-source="tableData">
    <a slot="name" slot-scope="title">{{ title }}</a>
    <span slot="status" slot-scope="status">
        <a-tag :key="status" color="green">
            {{ status.toUpperCase() }}
        </a-tag>
      <!-- <a-tag
        v-for="item in status"
        :key="item"
        :color="item === 'loser' ? 'volcano' : item.length > 5 ? 'geekblue' : 'green'"
      >
        {{ item.toUpperCase() }}
      </a-tag> -->
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table> 
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Table",
    computed: {
        ...mapGetters ([
            "tableColumns",
            "tableData"
        ])
    }
}
</script>

<style>

</style>