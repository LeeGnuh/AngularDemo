import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  pokemon!: Pokemon;
  pokemons: Pokemon[] = [
    { id: 1,  name: 'pikachu'    , type: 'electric', favorite: true  },
    { id: 2,  name: 'hitokage'   , type: 'fire'    , favorite: false },
    { id: 3,  name: 'fushigidane', type: 'grass'   , favorite: false },
    { id: 4,  name: 'zenigame'   , type: 'water'   , favorite: true  }
  ]
  handleRemove(event:Pokemon){    
    this.pokemons = this.pokemons.filter((pokemon: Pokemon)=>{
      return pokemon.id !== event.id;
    })
  }
}
