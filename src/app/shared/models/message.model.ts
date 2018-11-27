import { User } from './user.model';

export class Message {
  sender: User;
  mid: string;
  rid: string;
  content: string;
  date: number;
}
