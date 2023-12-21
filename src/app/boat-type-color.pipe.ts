import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boatTypeColor',
  standalone: true
})
export class BoatTypeColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    
    switch (value) {
      case 'sail':
        return 'bg-blue-200';
      case 'motor':
        return 'bg-red-200';
      default:
        return 'bg-gray-200';
    }
  }
}
