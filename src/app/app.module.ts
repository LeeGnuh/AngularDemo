import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { BaseModule } from './base/base.module';
import { ListComponent } from './base/list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [	
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
      FormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
