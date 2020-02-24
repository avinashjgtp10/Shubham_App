import { Component,Input } from '@angular/core';

/**
 * Generated class for the ComponentsShowPasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'show-password',
  templateUrl: 'components-show-password.html'
})
export class ComponentsShowPasswordComponent {

  text: string;
  password_type:string='password'
  inline:boolean=false;
  constructor() {
    console.log('Hello ComponentsShowPasswordComponent Component');
    this.text = 'Hello World';
  }

  changeShow(){
    console.log(this.password_type)
    this.password_type=this.password_type === 'text' ? "password":"text";
  }

}
