import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: string): string {
    // Convierte el formato de la fecha recibida al formato dd/mm/aaaa

    const fecha: Date = new Date(Date.parse(value));
    const dd = fecha.getDate().toString().padStart(2, '0');
    const mm = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const aaaa = fecha.getFullYear().toString();
    return dd + '/' + mm + '/' + aaaa;
  }

}
