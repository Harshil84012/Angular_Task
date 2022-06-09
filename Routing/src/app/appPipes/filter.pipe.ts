import { Pipe, PipeTransform } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if (value.Length == 0) {
      return value;
    }

    return value.filter(function (search: any) {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}
