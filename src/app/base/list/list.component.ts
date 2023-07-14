import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pokemons!: Pokemon[];

  constructor(private pokemonSrvice: PokemonService){

  }
  handleRemove(event:Pokemon){    
    this.pokemons = this.pokemons.filter((pokemon: Pokemon)=>{
      return pokemon.idPK !== event.idPK;
    })
  }

  ngOnInit(): void {
    this.pokemonSrvice.getPokemon().subscribe((data: Pokemon[])=>{
      console.log(data);
      this.pokemons=data;
    });
  }
}
