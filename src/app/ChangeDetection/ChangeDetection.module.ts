import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestZoneJsComponent } from './TestZoneJs/TestZoneJs.component';
import { TestOnPushComponent } from './TestOnPush/TestOnPush.component';

@NgModule({
  declarations: [
    TestZoneJsComponent,
    TestOnPushComponent
  ],
  imports: [ 
    CommonModule,
  ],
  exports:[
    TestZoneJsComponent,
    TestOnPushComponent
  ],
  providers:[
  ]
})
export class CDModule { }
