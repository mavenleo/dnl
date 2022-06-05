import { Commit } from 'vuex';
import { CompaniesMutationEnum } from './companies-mutation-types';
import {Company} from "@/store/companies-types";

const actions = {
  addCompany({ commit }: { commit: Commit }, payload: Company) {
    commit(CompaniesMutationEnum.ADD_COMPANY, payload);
  },
  saveSelectedCompany({ commit }: { commit: Commit }, payload: Company) {
    commit(CompaniesMutationEnum.SAVE_SELECTED_COMPANY, payload);
  },
  updateCompany({ commit }: { commit: Commit }, payload: Company) {
    commit(CompaniesMutationEnum.UPDATE_COMPANY, payload);
  },
  deleteCompany({ commit }: { commit: Commit }, payload: number) {
    commit(CompaniesMutationEnum.DELETE_COMPANY, payload);
  },
};

export default actions;
