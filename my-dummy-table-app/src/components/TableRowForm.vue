<template>
  <a-form :form="form" layout="vertical" hide-required-mark @submit="handleSubmit">
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Title">
              <a-input
                v-decorator="[
                  'title',
                  {
                    rules: [{ required: true, message: 'Please enter user title' }],
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
                  },
                ]"
                placeholder="Please select a status"
              >
                <a-select-option value="xiao">
                  Xiaoxiao Fu
                </a-select-option>
                <a-select-option value="mao">
                  Maomao Zhou
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
export default {
    name: "TableRowForm",
    data() {
        return {
            form:this.$form.createForm(this)
        }
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

<style>

</style>