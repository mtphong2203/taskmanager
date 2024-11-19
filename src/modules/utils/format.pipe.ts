import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  standalone: true
})
export class FormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value != null) {
      return `${value}m`
    }
    return value;
  }

}
