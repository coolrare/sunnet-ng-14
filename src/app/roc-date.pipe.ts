import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rocDate'
})
export class RocDatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const rocYear = date.getFullYear() - 1911;
    const rocMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    const rocDate = ('0' + date.getDate()).slice(-2);
    const rocDateFormatted = `${rocYear}-${rocMonth}-${rocDate}`;
    return rocDateFormatted;
  }

}
