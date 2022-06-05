<template>
  <v-text-field
    @input="e => $emit('input', e)"
    :value="value"
    :required="data.required"
    :label="data.label"
    :rules="data.required ? [v => !!v || 'This field is required'] : []"
    :placeholder="data.placeholder"
  ></v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextInput',
  props: {
    data: Object,
    value: String,
  },
});
</script>

<style lang="scss" scoped></style>
