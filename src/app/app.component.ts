import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
