import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as papa from 'papaparse';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
//import { File } from '@ionic-native/file/ngx';
/*
  Generated class for the FileTransformationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileTransformationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FileTransformationProvider Provider');
  }

  generateExcel(data:any){
    let csv=papa.unparse(data)
    const url = 'http://www.example.com/file.pdf';
    // private transfer: FileTransfer, private file: File
   // this.transfer.create().download(csv,this.file.dataDirectory).then((entry) => {
    //   console.log('download complete: ' + entry.toURL());
    // }, (error) => {
    //   // handle error
    // });
    let fileName: any = "report.csv"
    //this.file.writeFile(this.file.externalRootDirectory,fileName,csv,true).then()
    // var blob = new Blob([csv]);
    // var a = window.document.createElement("a");
    // a.href = window.URL.createObjectURL(blob);
    // a.download = "newdata.csv";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
  }


}
