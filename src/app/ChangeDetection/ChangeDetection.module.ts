import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { TestZoneJsComponent } from './TestZoneJs/TestZoneJs.component';
import { TestOnPushComponent } from './TestOnPush/TestOnPush.component';

@NgModule({
  declarations: [
    TestZoneJsComponent,
    TestOnPushComponent
  ],
  imports: [ 
    CommonModule,
    HttpClientModule
  ],
  exports:[
    TestZoneJsComponent,
    TestOnPushComponent
  ],
  providers:[
    PokemonService
  ]
})
export class CDModule { }
