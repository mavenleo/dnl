import { CompaniesState, Company } from '@/store/companies-types';

export enum CompaniesMutationEnum {
  ADD_COMPANY = 'ADD_COMPANY',
  DELETE_COMPANY = 'DELETE_COMPANY',
  SAVE_SELECTED_COMPANY = 'SAVE_SELECTED_COMPANY',
  UPDATE_COMPANY = 'UPDATE_COMPANY',
}

export type CompaniesMutationTypes<S = CompaniesState> = {
  [CompaniesMutationEnum.ADD_COMPANY](state: S, payload: Company): void;

  [CompaniesMutationEnum.SAVE_SELECTED_COMPANY](state: S, payload: Company | null): void;

  [CompaniesMutationEnum.DELETE_COMPANY](state: S, payload: number): void;

  [CompaniesMutationEnum.UPDATE_COMPANY](state: S, payload: Company): void;
};
