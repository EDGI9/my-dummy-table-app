<template>
  <a-form :form="form" layout="vertical" hide-required-mark @submit="handleSubmit">
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Id">
              <a-input
                v-decorator="[
                  'id',
                  {
                    initialValue: rowToEdit.id
                  },
                ]"
                disabled
                placeholder="Please enter title"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Title">
              <a-input
                v-decorator="[
                  'title',
                  {
                    rules: [{ required: true, message: 'Please enter user title', min:3, max:20, pattern: /^[a-z0-9]+$/i }],
                    initialValue: rowToEdit.title
                  },
                ]"
                placeholder="Please enter title"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Status">
              <a-select
                v-decorator="[
                  'status',
                  {
                    rules: [{ required: true, message: 'Please select a status' }],
                    initialValue: rowToEdit.status
                  },
                ]"
                placeholder="Please select a status"
              >
                <a-select-option v-for="(status, index) of statuses" :key="index" :value="status">
                  {{status}}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">
                Submit
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name: "TableRowEditForm",
    data() {
        return {
            form:this.$form.createForm(this)
        }
    },
    computed: {
        ...mapGetters(['rowToEdit', 'statuses'])
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                  this.$emit("on-submit", values)
                }
            });
        },
    }
}
</script>
