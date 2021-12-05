import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], name: string,criterio: unknown): any[] {
    console.log(value)
    console.log(name)
    console.log(criterio)
   
    if(criterio === '' || criterio === undefined) {
      return value
    }
    else
    {
      return value.filter(dato => dato[name].toLowerCase().indexOf(criterio) != -1)
    }

  }

}
