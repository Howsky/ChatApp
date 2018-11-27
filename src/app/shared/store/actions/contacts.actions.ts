import { User } from './../../models/user.model';
import { Action } from '@ngrx/store';
import { type } from '../../utility';

export const ContactsActionTypes = {
  SelectToTalk: type('[Contacts] Select to talk'),
  DeselectToTalk: type('[Contacts] Deselect to talk'),
  DeselectAllToTalk: type('[Contacts] Deselect ALL to talk'),
};

export class SelectToTalk implements Action {
  readonly type = ContactsActionTypes.SelectToTalk;
  constructor(public payload: User) {}
}

export class DeselectToTalk implements Action {
  readonly type = ContactsActionTypes.DeselectToTalk;
  constructor(public payload: User) {}
}

export class DeselectAllToTalk implements Action {
  readonly type = ContactsActionTypes.DeselectAllToTalk;
  constructor(public payload: any) {}
}

export type ContactsAction = SelectToTalk | DeselectToTalk | DeselectAllToTalk;

