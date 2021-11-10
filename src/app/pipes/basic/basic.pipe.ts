import { Pipe, PipeTransform } from '@angular/core';
import { $ } from 'protractor';

@Pipe({
  name: 'basic'
})
export class BasicPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value) {
      if (value.length > 80) {
        return `${value.substring(0,80)}...`;
      } else {
        return `${value}`;
      }
    } 
  }

}
