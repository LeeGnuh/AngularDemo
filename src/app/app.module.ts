import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AASModule } from './AsyncAndSync/AsyncAndSync.module';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { BaseModule } from './base/base.module';
import { FormComponent } from './form/form.component';
import { CDModule } from './ChangeDetection/ChangeDetection.module';
import { RxJSModule } from './RxJS/base.module';
import { LifeCycleComponent } from './LifeCycle/LifeCycle.component';


@NgModule({
  declarations: [			
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    FormComponent,
      LifeCycleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BaseModule,
    AASModule,
    CDModule,
    RxJSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
