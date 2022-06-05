<template>
  <v-radio-group
    :required="data.required"
    :value="value"
    :label="data.label"
    :rules="data.required ? [v => !!v || 'This field is required'] : []"
    :name="data.key"
    @change="e => $emit('input', e)"
  >
    <v-radio
      v-for="(item, i) in data.items"
      :key="i"
      :label="item.text"
      :value="item.value"
    ></v-radio>
  </v-radio-group>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RadioInput',
  props: {
    data: Object,
    value: [String, Boolean, Number],
  },
});
</script>

<style lang="scss" scoped></style>
