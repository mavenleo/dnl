<template>
  <v-select
    :label="data.label"
    :required="data.required"
    :value="value"
    @input="e => $emit('input', e)"
    :rules="data.required ? [v => !!v || 'This field is required'] : []"
    :items="data.items"
  ></v-select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SelectInput',
  props: {
    data: Object,
    value: [String, Boolean, Number],
  },
});
</script>

<style lang="scss" scoped></style>
