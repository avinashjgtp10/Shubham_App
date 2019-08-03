import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-loader',
  templateUrl: './page_loader.html'
})

export class PageLoader {
    isBusy = false;

    constructor() { }

    showLoader(){
        this.isBusy = true;
    }
    hideLoader(){
        this.isBusy = false;
    }

}