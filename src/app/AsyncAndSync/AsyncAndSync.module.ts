import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CallBackComponent } from './CallBack/CallBack.component';
import { PromiseComponent } from './Promise/Promise.component';
import { AsyncAwaitComponent } from './AsyncAwait/AsyncAwait.component';

@NgModule({
  declarations: [
    CallBackComponent,
    PromiseComponent,
    AsyncAwaitComponent
  ],
  imports: [ 
    CommonModule,
    HttpClientModule
  ],
  exports:[
    CallBackComponent,
    PromiseComponent,
    AsyncAwaitComponent
  ],
  providers:[
  ]
})
export class AASModule { }
