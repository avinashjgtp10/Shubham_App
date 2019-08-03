import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'header-component',
  templateUrl: './header_component.html'
})

export class HeaderComponent {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  constructor(public alertCtrl: AlertController) { }

  onClickButton(event: any) {

    const confirm = this.alertCtrl.create({
      title: 'Log out',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.onClick.emit(event);
          }
        }
      ]
    });
    confirm.present();

  }
}