import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: string): string {
    try{
      let date = new Date(value);
      console.log(date, 'dateenpipe');
      console.log(value, 'vaaaaaaluee');

      return date.getDate() + "/" + date.getMonth()+ "/"+date.getFullYear();
      }catch(e){
        return "invalid_date";
      }
  }

}
