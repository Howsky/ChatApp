import { User } from './../../models';
import {
  ContactsActionTypes,
  ContactsAction
} from '../actions/contacts.actions';

export interface State {
  selectedContactsToTalk: Array<User>;
}

const initialState: State = {
  selectedContactsToTalk: []
};

export function reducer(
  state: State = initialState,
  action: ContactsAction
): State {
  const contactItem: User = action.payload;
  if (action.type === ContactsActionTypes.SelectToTalk) {
    const oldSelectedContacts = [...state.selectedContactsToTalk];
    const newSelectedContacts = [...oldSelectedContacts, contactItem];
    return {
      ...state,
      selectedContactsToTalk: [...newSelectedContacts]
    };
  } else if (action.type === ContactsActionTypes.DeselectToTalk) {
    const oldSelectedContacts = [...state.selectedContactsToTalk];
    const newSelectedContacts = oldSelectedContacts.filter(user => {
      return JSON.stringify(user) !== JSON.stringify(contactItem);
    });
    return {
      ...state,
      selectedContactsToTalk: [...newSelectedContacts]
    };
  } else if (action.type === ContactsActionTypes.DeselectAllToTalk) {
    return {
      ...state,
      selectedContactsToTalk: []
    };
  } else {
    return state;
  }
}

export const getSelectedContactsToTalk = (state: State) =>
  state.selectedContactsToTalk;
