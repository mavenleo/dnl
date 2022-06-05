<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <v-row>
        <v-col cols="12" v-for="(field, i) in formStructure" :key="i">
          <component
            :is="getComponentByFieldType(field.type)"
            v-model="form[field.key]"
            :data="field"
          ></component>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import TextInput from '@/components/UI/TextInput.vue';
import RadioInput from '@/components/UI/RadioInput.vue';
import SelectInput from '@/components/UI/SelectInput.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'DynamicForm',
  components: {
    SelectInput,
    RadioInput,
    TextInput,
  },
  props: {
    formStructure: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: {},
      isFormValid: false,
    };
  },
  computed: {
    ...mapGetters({
      selectedCompany: 'companies/selectedCompany',
    }),
  },
  mounted() {
    const selectedCompany = this.selectedCompany || {};
    this.form = { ...selectedCompany };
  },
  methods: {
    getComponentByFieldType(type: string) {
      switch (type) {
        case 'selectField':
          return 'select-input';

        case 'radioGroup':
          return 'radio-input';

        case 'textField':
          return 'text-input';

        default:
        // do nothing I guess...
      }
    },
    getFormValues() {
      return this.form;
    },
  },
});
</script>

<style lang="scss" scoped></style>
