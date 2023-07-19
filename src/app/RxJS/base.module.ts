import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './Observable/Observable.component';
import { ObserverComponent } from './Observer/Observer.component';
import { OperatorComponent } from './Operator/Operator.component';

@NgModule({
  declarations: [
    ObservableComponent,
    ObserverComponent,
    OperatorComponent,
  ],
  imports: [ 
    CommonModule,
  ],
  exports:[
    ObservableComponent,
    ObserverComponent,
    OperatorComponent,
  ],
  providers:[
  ]
})
export class RxJSModule { }
