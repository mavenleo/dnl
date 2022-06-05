<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="showDialog('isAddCompanyDialogVisible')" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @editItem="e => showDialog('isEditCompanyDialogVisible', e)"
        @deleteItem="e => showDialog('isDeleteDialogVisible', e)"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :key="Date.now()"
        :isVisible="dialogConditions.isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeDialog('isAddCompanyDialogVisible')"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :key="Date.now()"
        :formData="selectedCompany"
        :isVisible="dialogConditions.isEditCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeDialog('isEditCompanyDialogVisible')"
      />
      <DeleteDialog
        @delete="handleItemDelete"
        :isVisible="dialogConditions.isDeleteDialogVisible"
        @close="closeDialog('isDeleteDialogVisible')"
      />
    </MainContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/UI/AppBar.vue';
import MainContainer from '@/components/Containers/MainContainer.vue';
import DataTableCompanies from '@/components/Tables/DataTableCompanies.vue';
import BtnMain from '@/components/UI/BtnMain.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import DeleteDialog from '@/components/Dialogs/DeleteDialog.vue';
import { mapGetters } from 'vuex';
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: () => ({
    dialogConditions: {
      isEditCompanyDialogVisible: false,
      isAddCompanyDialogVisible: false,
      isDeleteDialogVisible: false,
    },
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      formStructure: 'companies/companyForm',
      selectedCompany: 'companies/selectedCompany',
      tableHeaders: 'companies/companyTableHeaders',
    }),
  },
  methods: {
    showDialog(dialogCondition: string, company: Company | undefined) {
      if (company) {
        this.$store.dispatch('companies/saveSelectedCompany', company);
      }

      this.dialogConditions = {
        ...this.dialogConditions,
        [dialogCondition]: true,
      };
    },

    closeDialog(dialogCondition: string) {
      this.dialogConditions = {
        ...this.dialogConditions,
        [dialogCondition]: false,
      };

      this.$store.dispatch('companies/saveSelectedCompany', null);
    },

    handleItemDelete() {
      const itemIndex = this.tableItems.findIndex(
        (company: Company) => company.companyId === this.selectedCompany.companyId,
      );
      this.$store.dispatch('companies/deleteCompany', itemIndex);
      this.closeDialog('isDeleteDialogVisible');
    },
  },
});
</script>

<style lang="scss" scoped></style>
