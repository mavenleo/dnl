import { MutationTree } from 'vuex';
import { CompaniesMutationTypes, CompaniesMutationEnum } from '@/store/companies-mutation-types';
import { CompaniesState, Company } from '@/store/companies-types';

const companiesMutations: MutationTree<CompaniesState> & CompaniesMutationTypes = {
  [CompaniesMutationEnum.ADD_COMPANY](state: CompaniesState, payload: Company) {
    state.companies?.push({
      ...payload,
      companyId: `id${state.companies.length + 1}`,
      className: 'company-item',
      createdAt: 'string',
      updatedAt: 'string',
    });
  },

  [CompaniesMutationEnum.SAVE_SELECTED_COMPANY](state: CompaniesState, payload: Company) {
    state.selectedCompany = payload;
  },

  [CompaniesMutationEnum.DELETE_COMPANY](state: CompaniesState, index: number) {
    state.companies?.splice(index, 1);
  },

  [CompaniesMutationEnum.UPDATE_COMPANY](state: CompaniesState, payload: Company) {
    if (state.companies) {
      const index = state.companies.findIndex(v => v.companyId === payload.companyId);
      state.companies[index] = payload;
      state.companies = [...state.companies];
    }
  },
};

export default companiesMutations;
