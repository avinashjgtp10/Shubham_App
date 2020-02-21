import { Component,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the TabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab',
  templateUrl: 'tab.html'
})
export class TabComponent {

  text: string;
  @Input() imgSrc1:string;
  @Input() imgSrc2:string;
  @Input() title:string;
  @Input() title1:string;
  @Output() onChange =new EventEmitter();
  @Output() onChange1 =new EventEmitter();

  constructor() {
    console.log('Hello TabComponent Component');
    this.text = 'Hello World';
  }

  handleChange(event:any){
    this.onChange.emit('')
    
  }
  handleChange1(event:any){
    this.onChange1.emit('');
  }
}
