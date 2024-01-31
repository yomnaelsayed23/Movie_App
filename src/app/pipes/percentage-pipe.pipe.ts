import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone:true
})
export class PercentagePipe implements PipeTransform {
  transform(value: number): string {
    // Multiply by 100 to convert to percentage
    const percentage: number = value * 10;

    // Use toFixed(2) to round to two decimal places
    return percentage.toFixed(0) + '%';
  }
}
