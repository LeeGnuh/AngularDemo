import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  //Data binding
  fontSizePx = 20;

  //Directive
  parentItemForm : any;
  logForm(form : any):void{
    console.log(form.value.name);
    console.log(form.value.email);
  }

  //LifeCycle
    //ngOnChanges
  name = 'Lê Thiên Minh Hùng';              //name sẽ được property binding sang myInput trong file HTML (@Input) 

  onMyInputChanged(newValue: string) {      //Function bắt emit từ LifeCycle.component.ts được eventbiding tông qua HTML (@Output)
    this.name = newValue;
  }
  
}
