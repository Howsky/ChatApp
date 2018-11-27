import { ShortenPipe } from './shorten.pipe';
import { CountUndisplayedPipe } from './count-undisplayed.pipe';
import { NgModule } from '@angular/core';

export const PIPES = [CountUndisplayedPipe, ShortenPipe];

@NgModule({
  imports: [],
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule {}
