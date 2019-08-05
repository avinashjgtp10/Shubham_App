import { Pipe, PipeTransform } from '@angular/core';
import { RestProvider } from "../../providers/rest/rest"

/**
 * Generated class for the ConvertMachinNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'convertMachinName',
})
export class ConvertMachinNamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(public rest: RestProvider) { }

  transform(value: string, ...args) {
    console.log(value);
    return this.getDate(value);
  }
  getDate(val){
    var d = new Date(val);
    return d.getFullYear() +"/"+ (d.getMonth()+1)+"/"+d.getDate();
  }
}
