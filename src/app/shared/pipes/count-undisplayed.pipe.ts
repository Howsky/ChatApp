import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countUndisplayed'
})
export class CountUndisplayedPipe implements PipeTransform {

  transform(value: string, undisplayedItems: number): string {
    if (undisplayedItems > 0) {
      return `${value} +${undisplayedItems}`;
    }
    return value;
  }

}
