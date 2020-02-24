import { Directive,HostBinding,ElementRef } from '@angular/core';

/**
 * Generated class for the DirectivesShowPasswordDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[show-password]' // Attribute selector
})
export class DirectivesShowPasswordDirective {
  @HostBinding() type:string;

  constructor(private el:ElementRef) {
    this.type='password'
    console.log('Hello DirectivesShowPasswordDirective Directive');
  }

  changeType(type: string) {  // in your case function name is type
    this.type = type;
    this.el.nativeElement.children[0].type = this.type; // change type for input inside the ion-input
}

}
