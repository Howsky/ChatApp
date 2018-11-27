import { ActionReducerMap, createSelector, combineReducers } from '@ngrx/store';

import { compose } from '@ngrx/core/compose';

import * as fromContacts from './reducers/contacts.reducer';

export interface ApplicationState {
  contacts: fromContacts.State;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  contacts: fromContacts.reducer
};

export function store(state: any, action: any) {
  const str = compose(combineReducers)(reducers);
  return str(state, action);
}

export const getContactsState = (state: ApplicationState) => state.contacts;
export const getSelectedContactsToTalk = createSelector(
  getContactsState,
  fromContacts.getSelectedContactsToTalk
);
