import { Store } from '@ngrx/store';

import * as fromRoot from '../store';
import { Observable } from 'rxjs';


export abstract class Controller {


  constructor(protected appState$: Store<fromRoot.ApplicationState>) {}
}
