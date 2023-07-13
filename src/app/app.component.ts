import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*-------------------------Data binding-------------------------*/
  fontSizePx = 20;

  /*---------------------------Directive--------------------------*/
  parentItemForm : any;
  logForm(form : any):void{
    console.log(form.value.name);
    console.log(form.value.email);
  }
  
}
