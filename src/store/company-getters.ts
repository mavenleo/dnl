import { GetterTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { BaseState } from './types';

const companiesGetters: GetterTree<CompaniesState, BaseState> = {
  companies(state) {
    return state.companies;
  },
  companyForm(state) {
    return state.companyForm;
  },
  selectedCompany(state) {
    return state.selectedCompany;
  },
  companyTableHeaders(state) {
    return state.companyTableHeaders;
  },
};

export default companiesGetters;
