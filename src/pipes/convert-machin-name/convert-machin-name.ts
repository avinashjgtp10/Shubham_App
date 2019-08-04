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
    let getValue;
    let machin = [];
    console.log(value)
    this.rest.getMachineType().subscribe((result: any) => {
      machin = result.data; 
    })
    machin.forEach((element: any) => {
      if (parseInt(element.id) === parseInt(value)) {
        getValue = element.Value
      } else {
        getValue = "";
      }
    });
    let index = machin.findIndex((ele:any) => {
      return ele.id === value;
    
    })
    console.log("value", index);
    return getValue;
  }
}
