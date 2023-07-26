import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './Observable/Observable.component';
import { ObserverComponent } from './Observer/Observer.component';
import { OperatorComponent } from './Operator/Operator.component';
import { SubscriptionComponent } from './Subscription/Subscription.component';
import { SubjectComponent } from './Subject/Subject.component';

@NgModule({
  declarations: [
    ObservableComponent,
    ObserverComponent,
    OperatorComponent,
    SubscriptionComponent,
    SubjectComponent,
  ],
  imports: [ 
    CommonModule,
  ],
  exports:[
    ObservableComponent,
    ObserverComponent,
    OperatorComponent,
    SubscriptionComponent,
    SubjectComponent,
  ],
  providers:[
  ]
})
export class RxJSModule { }
