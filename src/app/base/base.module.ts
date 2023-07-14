import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [ 
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ListComponent,
    DetailComponent
  ],
  providers:[
    PokemonService
  ]
})
export class BaseModule { }
