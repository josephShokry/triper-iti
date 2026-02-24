import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailsPipe',
})
export class DetailsPipePipe implements PipeTransform {

  transform(value: string[]): string[] {
    return [value[0] + "..."];
  }
}
